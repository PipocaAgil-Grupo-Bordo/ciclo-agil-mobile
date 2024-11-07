import { useTokenContext } from "@context/useUserToken";
import { menstrualApi } from "@services/menstrualApi";
import { ColorScheme } from "@styles/globalStyles";
import { ICalendarDateInfo, IMenstrualPeriod } from "@type/menstrual";
import { View, Text, Alert, Modal, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { CalendarList, DateData, LocaleConfig } from "react-native-calendars";
import { styles } from "./style";

interface Props {
  horizontalView?: boolean;
}

LocaleConfig.locales["pt-br"] = {
  monthNames: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ],
  monthNamesShort: [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
  ],
  dayNames: [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
  ],
  dayNamesShort: ["D", "S", "T", "Q", "Q", "S", "S"] // Formato abreviado de "Dom", "Seg", etc.
};

LocaleConfig.defaultLocale = "pt-br";

// Function that returns styles based on cycle
function currentCycle(cycle: string) {
  if (cycle === "firstDay") {
    return {
      customStyles: {
        container: {
          borderWidth: 1.9,
          borderColor: "#DCC1EE",
          backgroundColor: "#DCC1EE"
        },
        text: {
          color: "#000"
        }
      }
    };
  }

  if (cycle === "fertile") {
    return {
      customStyles: {
        container: {
          borderWidth: 1.9,
          borderColor: "#DCC1EE",
          backgroundColor: "#DCC1EE"
        },
        text: {
          color: "#000"
        }
      }
    };
  }

  return {};
}

function CalendarListScreen(props: Props) {
  const { horizontalView } = props;
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [selectedDatesInfo, setSelectedDatesInfo] = useState<{ id: number; date: string }[]>([]);
  const { accessToken } = useTokenContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [pendingDate, setPendingDate] = useState<string | null>(null); // Armazena a data para decidir se deve ser adicionada ou não.
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMenstrualPeriods();
  }, []);

  const fetchMenstrualPeriods = async () => {
    setIsLoading(true);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    if (accessToken) {
      const response = await menstrualApi.getMenstrualPeriods({ token: accessToken });
      setSelectedDatesInfo(formatDateInfoList(response.data));
      const dates = formatDateList(response.data);
      setSelectedDates(dates);
    }
    setIsLoading(false);
  };

  const calculateDateGap = (newDate: string) => {
    if (selectedDates.length === 0) return 0;
    const lastSelectedDate = selectedDates[selectedDates.length - 1];
    const differenceInDays =
      Math.abs(new Date(newDate).getTime() - new Date(lastSelectedDate).getTime()) /
      (1000 * 3600 * 24);
    return differenceInDays;
  };

  const handleModalResponse = (response: "yes" | "no") => {
    setModalVisible(false);

    if (response === "yes" && pendingDate) {
      // Preencher os dias anteriores se o usuário escolher 'sim'
      fillPreviousDates(pendingDate);
    } else if (response === "no" && pendingDate) {
      // Somente adicionar a data se o gap for >= 3 (novo ciclo)
      addMenstrualPeriodDate(pendingDate);
      setSelectedDates([...selectedDates, pendingDate]);
    }

    setPendingDate(null);
  };

  const fillPreviousDates = async (date: string) => {
    const selectedDate = new Date(date);
    const firstSelectedDate = selectedDates[0];
    const firstDate = new Date(firstSelectedDate);
    const lastSelectedDate = selectedDates[selectedDates.length - 1];
    const lastDate = new Date(lastSelectedDate);
    let start;
    let end;
    const datesToFill: string[] = [];
    const datesToFillInfo: { id: number; date: string }[] = [];

    if (selectedDate < firstDate) {
      start = selectedDate;
      end = firstDate;
      for (let d = new Date(start); d < end; d.setDate(d.getDate() + 1)) {
        datesToFill.push(d.toISOString().split("T")[0]);
      }
    }
    if (selectedDate > lastDate) {
      start = lastDate;
      end = selectedDate;
      start.setDate(start.getDate() + 1);
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        datesToFill.push(d.toISOString().split("T")[0]);
      }
    }

    setSelectedDates([...selectedDates, ...datesToFill]);

    await Promise.all(
      datesToFill.map(async (dateToAdd) => {
        const response = await addMenstrualPeriodDate(dateToAdd);
        if (response) {
          datesToFillInfo.push(response);
        }
        return response;
      })
    );

    setSelectedDatesInfo([...selectedDatesInfo, ...datesToFillInfo]);
  };

  const handleDayPress = (day: DateData) => {
    const date = day.dateString;

    if (!selectedDates.includes(date)) {
      const gap = calculateDateGap(date);

      // Exibir o modal apenas para gaps maiores que 1 dia e menores ou iguais a 7 dias
      if (gap > 1 && gap <= 8) {
        setPendingDate(date);
        setModalVisible(true); // Mostra o modal
      } else {
        addMenstrualPeriodDate(date);
        setSelectedDates([...selectedDates, date]);
      }
    } else {
      deleteMenstrualPeriodDate(date);
    }
  };

  const addMenstrualPeriodDate = async (date: string) => {
    try {
      if (accessToken) {
        const response = await menstrualApi.createPeriodDate({ date }, accessToken);
        const data = response.data;
        setSelectedDatesInfo([...selectedDatesInfo, { id: data.id, date: data.date }]);
        return { id: data.id, date: data.date };
      }
    } catch (error) {
      Alert.alert("Erro ao adicionar data, tente novamente!");
      const currentSelectedDates = [...selectedDates];
      const currentSelectedDatesInfo = [...selectedDatesInfo];
      currentSelectedDatesInfo.pop();
      setSelectedDatesInfo(currentSelectedDatesInfo);
      currentSelectedDates.pop();
      setSelectedDates(currentSelectedDates);
    }
  };

  const deleteMenstrualPeriodDate = async (date: string) => {
    const dateInfo = selectedDatesInfo.find((info) => info.date === date);
    if (!dateInfo) return; // Adiciona uma verificação caso não encontre a data.
    try {
      if (accessToken) {
        // Filtrar para remover a data correta
        const updatedSelectedDates = selectedDates.filter((selectedDate) => selectedDate !== date);
        const updatedSelectedDatesInfo = selectedDatesInfo.filter((info) => info.date !== date);
        setSelectedDates(updatedSelectedDates);
        setSelectedDatesInfo(updatedSelectedDatesInfo);

        // Chama a API para deletar
        await menstrualApi.deletePeriodDate(dateInfo.id, accessToken);
      }
    } catch (error) {
      // Reverter a operação em caso de erro
      Alert.alert("Erro ao deletar data, tente novamente!");
      setSelectedDates([...selectedDates, date]);
      setSelectedDatesInfo([...selectedDatesInfo, dateInfo]);
    }
  };

  const formatDateList = (menstrualPeriods: IMenstrualPeriod[]) => {
    return menstrualPeriods.flatMap((menstrualPeriod: IMenstrualPeriod) => {
      return menstrualPeriod.dates.map((menstrualPeriodDate) => menstrualPeriodDate.date);
    });
  };

  const formatDateInfoList = (menstrualPeriods: IMenstrualPeriod[]) => {
    return menstrualPeriods.flatMap((menstrualPeriod: IMenstrualPeriod) => {
      return menstrualPeriod.dates.map((menstrualPeriodDate) => {
        return { id: menstrualPeriodDate.id, date: menstrualPeriodDate.date };
      });
    });
  };

  const markedDates = selectedDates.reduce((acc, date, index) => {
    if (index === 0) {
      // The first day selected is given the "firstDay" styles
      acc[date] = {
        ...currentCycle("firstDay"),
        customStyles: currentCycle("firstDay").customStyles // Apply customStyles
      };
    } else {
      // Os outros dias recebem estilos de "fertile"
      acc[date] = {
        ...currentCycle("fertile"),
        customStyles: currentCycle("fertile").customStyles
      };
    }
    return acc;
  }, {} as Record<string, any>);

  return (
    <View style={{ flex: 1 }}>
      <CalendarList
        markingType="custom"
        onDayPress={handleDayPress}
        markedDates={markedDates}
        calendarHeight={!horizontalView ? 390 : undefined}
        calendarWidth={!horizontalView ? 358 : undefined}
        theme={calendarTheme}
        hideExtraDays={false}
        horizontal={horizontalView}
        style={styles.calendar}
        monthFormat={"MMMM De yyyy"}
        pastScrollRange={360}
        futureScrollRange={12}
        displayLoadingIndicator={isLoading}
      />

      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View style={styles.overlay}>
            <View style={styles.modalView}>
              <Text style={styles.modalTextAlert}>Atenção! Alguns dias ficaram faltando</Text>
              <Text style={styles.modalText}>Você gostaria de anotar os dias anteriores?</Text>

              <View style={styles.buttonContainer}>
                <Pressable
                  style={[styles.button, styles.buttonNo]}
                  onPress={() => handleModalResponse("no")}
                >
                  <Text style={styles.textNo}>Não</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonYes]}
                  onPress={() => handleModalResponse("yes")}
                >
                  <Text style={styles.textStyle}>Sim</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const calendarTheme = {
  calendarBackground: "#fff",
  textMonthFontSize: 18,
  todayTextColor: ColorScheme.circle?.primary,
  selectedDayBackgroundColor: ColorScheme.circle?.primary,
  selectedDayTextColor: "#000",
  arrowColor: "#e8e8e8",
  textDayStyle: { color: "#000" },
  stylesheet: {
    calendar: {
      main: {
        container: {
          marginBottom: 20,
          backgroundColor: "#fff",
          width: "100%",
          borderRadius: 16
        },
        week: {
          flexDirection: "row",
          justifyContent: "space-around"
        }
      }
    }
  },
  "stylesheet.calendar.header": {
    header: {
      paddingTop: 12,
      paddingBottom: 12,
      backgroundColor: "#fff",
      flexDirection: "row",
      justifyContent: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#D9D9D9"
    },
    dayHeader: { paddingTop: 12, paddingBottom: 12, color: "#6C7072" }
  },
  "stylesheet.day.basic": {
    base: { width: 32, height: 32, alignItems: "center", justifyContent: "center" },
    selected: { borderRadius: 50 }
  }
};

export default CalendarListScreen;
