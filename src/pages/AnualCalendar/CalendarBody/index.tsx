import React, { useCallback, useState } from "react";

import { useTokenContext } from "@context/useUserToken";
import { useFocusEffect } from "@react-navigation/native";
import { menstrualApi } from "@services/menstrualApi";
import { ColorScheme } from "@styles/globalStyles";
import { IMenstrualPeriod } from "@type/menstrual";
import { View, Text, Alert, Modal, Pressable } from "react-native";
import { CalendarList, DateData, LocaleConfig } from "react-native-calendars";

import { styles } from "./style";
import CalendarHeader from "../CalendarHeader";

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
  const [futureDateModalVisible, setFutureDateModalVisible] = useState(false); // Novo estado para o modal de datas futuras

  useFocusEffect(
    useCallback(() => {
      fetchMenstrualPeriods();

      return () => {
        setSelectedDates([]);
        setSelectedDatesInfo([]);
      };
    }, [])
  );

  const fetchMenstrualPeriods = async () => {
    setIsLoading(true);
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
    const newDateObj = new Date(newDate);
    let minDiff = Infinity;

    for (const date of selectedDates) {
      const dateObj = new Date(date);
      const diff = Math.abs(newDateObj.getTime() - dateObj.getTime());
      if (diff < minDiff) {
        minDiff = diff;
      }
    }

    const gap = minDiff / (1000 * 3600 * 24) - 1;

    return gap;
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
    let closestDate = null;
    let minDiff = Infinity;

    for (const date of selectedDates) {
      const dateObj = new Date(date);
      const diff = Math.abs(selectedDate.getTime() - dateObj.getTime());
      if (diff < minDiff) {
        minDiff = diff;
        closestDate = new Date(date);
      }
    }

    const datesToFill: string[] = [];
    const datesToFillInfo: { id: number; date: string }[] = [];

    const fillDates = (start: Date, end: Date) => {
      const dates = [];

      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        dates.push(d.toISOString().split("T")[0]);
      }
      return dates;
    };

    if (selectedDate < closestDate!) {
      datesToFill.push(...fillDates(selectedDate, closestDate!));
    } else if (selectedDate > closestDate!) {
      closestDate?.setDate(closestDate.getDate() + 1);
      datesToFill.push(...fillDates(closestDate!, selectedDate));
    }

    // Evita adicionar datas duplicadas e ordena as datas.
    const uniqueDates = Array.from(new Set([...selectedDates, ...datesToFill]));
    uniqueDates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());

    setSelectedDates(uniqueDates);

    const responses = await Promise.all(
      datesToFill.map((dateToAdd) => addMenstrualPeriodDate(dateToAdd))
    );

    responses.forEach((response) => {
      if (response) datesToFillInfo.push(response);
    });

    setSelectedDatesInfo([...selectedDatesInfo, ...datesToFillInfo]);
  };

  const handleDayPress = (day: DateData) => {
    const date = day.dateString;
    const today = new Date().toISOString().split("T")[0];

    if (date > today) {
      setFutureDateModalVisible(true); // Mostra o modal de datas futuras
      return;
    }

    if (!selectedDates.includes(date)) {
      const gap = calculateDateGap(date);

      // Exibir o modal apenas para gaps maiores que 1 dia e menores ou iguais a 7 dias
      if (gap >= 1 && gap <= 7) {
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
    } catch {
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
    } catch {
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

  const markedDates = selectedDates.reduce(
    (acc, date, index) => {
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
    },
    {} as Record<string, object>
  );

  const renderCustomHeader = (date: XDate | undefined) => {
    return (
      <View style={styles.containerHeader}>
        <CalendarHeader date={date} />
      </View>
    );
  };

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
        pastScrollRange={360}
        futureScrollRange={12}
        displayLoadingIndicator={isLoading}
        renderHeader={(date) => renderCustomHeader(date)}
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

        <Modal
          animationType="fade"
          transparent={true}
          visible={futureDateModalVisible}
          onRequestClose={() => setFutureDateModalVisible(!futureDateModalVisible)}
        >
          <View style={styles.overlay}>
            <View style={styles.modalView}>
              <Text style={styles.modalTextAlert}>Datas futuras não podem ser adicionadas!!</Text>
              <Pressable
                style={[styles.button, styles.buttonYes, { marginTop: 48 }]}
                onPress={() => setFutureDateModalVisible(false)}
              >
                <Text style={styles.textStyle}>Entendi</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const calendarTheme = {
  calendarBackground: "#fff",
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
