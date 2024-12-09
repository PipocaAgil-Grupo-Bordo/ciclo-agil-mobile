import React, {useCallback, useEffect, useState } from "react";
import { View, Text, Alert, Modal, Pressable } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";
import { styles } from "./style";
import { ColorScheme } from "@styles/globalStyles";
import { ptBR } from "../../../utils/localeCalendarConfig";
import { useTokenContext } from "@context/useUserToken";
import { menstrualApi } from "@services/menstrualApi";
import { ICalendarDateInfo, IMenstrualPeriod } from "@type/menstrual";
import { useFocusEffect } from "@react-navigation/native";
import CalendarHeader from "../CalendarHeader";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

interface Props {
  horizontalView?: boolean;
}

function currentCycle(cycle: string) {
  if (cycle === "firstDay" || cycle === "selected") {
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

function CalendarApp(props: Props) {
  const { horizontalView } = props;
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [selectedDatesInfo, setSelectedDatesInfo] = useState<{ id: number; date: string }[]>([]);
  const { accessToken } = useTokenContext();
  const [modalVisible, setModalVisible] = useState(false);
  const [pendingDate, setPendingDate] = useState<string | null>(null); // Armazena a data para decidir se deve ser adicionada ou não.
  const [isLoading, setIsLoading] = useState(false);
  const [componentKey, setComponentKey] = useState(0);
  const [futureDateModalVisible, setFutureDateModalVisible] = useState(false); // Novo estado para o modal de datas futuras

  useFocusEffect(
    useCallback(() => {
      setComponentKey(prevKey => prevKey + 1);

      fetchMenstrualPeriods();
      return () => {
        setSelectedDates([]);
        setSelectedDatesInfo([]);
      };
    }, [])
  );

  const fetchMenstrualPeriods = async () => {
    setIsLoading(true);
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;

    if (accessToken) {
      const response = await menstrualApi.getMenstrualPeriods({ year, month, token: accessToken });
      setSelectedDatesInfo(formatDateInfoList(response.data));
      const dates = formatDateList(response.data);
      setSelectedDates(dates);
    }
    setIsLoading(false);
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

      // Exibir o modal apenas para gaps maiores ou iguais a 1 dia e menores ou iguais a 7 dias
      if (gap >= 1 && gap <= 7) {
        setPendingDate(date);
        setModalVisible(true);
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
    if (!dateInfo) return;
    try {
      if (accessToken) {
        const updatedSelectedDates = selectedDates.filter((selectedDate) => selectedDate !== date);
        const updatedSelectedDatesInfo = selectedDatesInfo.filter((info) => info.date !== date);
        setSelectedDates(updatedSelectedDates);
        setSelectedDatesInfo(updatedSelectedDatesInfo);
        await menstrualApi.deletePeriodDate(dateInfo.id, accessToken);
      }
    } catch (error) {
      Alert.alert("Erro ao deletar data, tente novamente!");
      setSelectedDates([...selectedDates, date]);
      setSelectedDatesInfo([...selectedDatesInfo, dateInfo]);
    }
  };

  const calculateDateGap = (newDate: string) => {
    if (selectedDates.length === 0) return 0;

    const newDateObj = new Date(newDate);
    let closestDate = null;
    let minDiff = Infinity;

    for (const date of selectedDates) {
      const dateObj = new Date(date);
      if (dateObj <= newDateObj) {
        const diff = Math.abs(newDateObj.getTime() - dateObj.getTime());
        if (diff < minDiff) {
          minDiff = diff;
          closestDate = date;
        }
      }
    }

    const gap = minDiff / (1000 * 3600 * 24) - 1;
    return gap;
  };

  const handleModalResponse = (response: "yes" | "no") => {
    setModalVisible(false);

    if (response === "yes" && pendingDate) {
      fillPreviousDates(pendingDate);
    } else if (response === "no" && pendingDate) {
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

  const formatDateList = (menstrualPeriods: IMenstrualPeriod[]) => {
    return menstrualPeriods.flatMap((menstrualPeriod: IMenstrualPeriod) =>
      menstrualPeriod.dates.map((menstrualPeriodDate) => menstrualPeriodDate.date)
    );
  };

  const formatDateInfoList = (menstrualPeriods: IMenstrualPeriod[]) => {
    return menstrualPeriods.flatMap((menstrualPeriod: IMenstrualPeriod) =>
      menstrualPeriod.dates.map((menstrualPeriodDate) => ({
        id: menstrualPeriodDate.id,
        date: menstrualPeriodDate.date
      }))
    );
  };

  const handleMonthChange = async (dateInfo: ICalendarDateInfo) => {
    setIsLoading(true);
    if (accessToken) {
      const response = await menstrualApi.getMenstrualPeriods({
        year: dateInfo.year,
        month: dateInfo.month,
        token: accessToken
      });
      const dates = formatDateList(response.data);
      const datesInfo = formatDateInfoList(response.data);
      setSelectedDates([...selectedDates, ...dates]);
      setSelectedDatesInfo([...selectedDatesInfo, ...datesInfo]);
    }
    setIsLoading(false);
  };

  const markedDates = selectedDates.reduce((acc, date) => {
    acc[date] = {
      ...currentCycle("selected"),
      customStyles: currentCycle("selected").customStyles
    };
    return acc;
  }, {} as Record<string, any>);

  const renderCustomHeader = (date: XDate | undefined) => {
    return (
      <View style={styles.containerHeader}>
        <CalendarHeader date={date}/>
      </View>
    );
  };


  return (
    <View style={styles.container} key={componentKey}>
      <Calendar
        style={styles.calendar}
        markingType="custom"
          theme={calendarTheme}
          calendarHeight={!horizontalView ? 300 : undefined}
          calendarWidth={!horizontalView ? 361 : undefined}
          hideExtraDays={false}
          onMonthChange={handleMonthChange}
          onDayPress={handleDayPress}
          markedDates={markedDates}
          horizontal={horizontalView}
          renderHeader={(date) => renderCustomHeader(date)}
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
  calendarBackground: "transparent",
  todayTextColor: ColorScheme.circle?.primary,
  selectedDayBackgroundColor: ColorScheme.circle?.primary,
  selectedDayTextColor: "#000",
  arrowColor: "#e8e8e8",
  textDayStyle: { color: "#000" },

  "stylesheet.calendar.header": {
    header: {
      flexDirection: "row",
      justifyContent: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#D9D9D9"
    },

    dayHeader: { paddingTop: 12, paddingBottom: 12, color: "#6C7072" }
  },

  "stylesheet.day.basic": {
    base: { margin: 8, width: 32, height: 32, alignItems: "center", justifyContent: "center" },
    selected: { borderRadius: 50 }
  }
};

export default CalendarApp;
