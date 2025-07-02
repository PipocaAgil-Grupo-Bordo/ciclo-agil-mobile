import { useTokenContext } from "@context/useUserToken";
import { useFocusEffect } from "@react-navigation/native";
import { menstrualApi } from "@services/menstrualApi";
import { ColorScheme } from "@styles/globalStyles";
import { ICalendarDateInfo, IMenstrualPeriod } from "@type/menstrual";
import React, { useCallback, useState } from "react";
import { View, Text, Alert, Modal, Pressable, ActivityIndicator } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";

import { styles } from "./style";
import { ptBR } from "../../../utils/localeCalendarConfig";
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
  const [modalLoading, setModalLoading] = useState(false); // Loading state for modal operations

  useFocusEffect(
    useCallback(() => {
      setComponentKey((prevKey) => prevKey + 1);

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

  const handleDayPress = async (day: DateData) => {
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
        const newDateInfo = await addMenstrualPeriodDate(date);
        if (newDateInfo) {
          setSelectedDates([...selectedDates, date]);
          setSelectedDatesInfo((prev) => [...prev, newDateInfo]);
        }
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
        return { id: data.id, date: data.date };
      }
    } catch {
      Alert.alert("Erro ao adicionar data, tente novamente!");
      return null;
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
    } catch {
      Alert.alert("Erro ao deletar data, tente novamente!");
      setSelectedDates([...selectedDates, date]);
      setSelectedDatesInfo([...selectedDatesInfo, dateInfo]);
    }
  };

  const calculateDateGap = (newDate: string) => {
    if (selectedDates.length === 0) return 0;

    const newDateObj = new Date(newDate);
    let minDiff = Infinity;

    for (const date of selectedDates) {
      const dateObj = new Date(date);
      if (dateObj <= newDateObj) {
        const diff = Math.abs(newDateObj.getTime() - dateObj.getTime());
        if (diff < minDiff) {
          minDiff = diff;
        }
      }
    }

    const gap = minDiff / (1000 * 3600 * 24) - 1;
    return gap;
  };

  const handleModalResponse = async (response: "yes" | "no") => {
    setModalLoading(true);

    if (response === "yes" && pendingDate) {
      await fillPreviousDates(pendingDate);
    } else if (response === "no" && pendingDate) {
      const newDateInfo = await addMenstrualPeriodDate(pendingDate);
      if (newDateInfo) {
        setSelectedDates([...selectedDates, pendingDate]);
        setSelectedDatesInfo((prev) => [...prev, newDateInfo]);
      }
    }

    setModalLoading(false);
    setModalVisible(false);
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

    if (!closestDate) return;

    const fillDates = (start: Date, end: Date) => {
      const dates = [];
      for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        dates.push(d.toISOString().split("T")[0]);
      }
      return dates;
    };

    const datesToFill =
      selectedDate < closestDate
        ? fillDates(selectedDate, closestDate)
        : fillDates(new Date(closestDate.setDate(closestDate.getDate() + 1)), selectedDate);

    const newDatesInfo: { id: number; date: string }[] = [];

    await Promise.all(
      datesToFill.map(async (dateToAdd) => {
        if (!selectedDates.includes(dateToAdd)) {
          const response = await addMenstrualPeriodDate(dateToAdd);
          if (response) {
            newDatesInfo.push(response);
          }
        }
      })
    );

    if (newDatesInfo.length > 0) {
      setSelectedDates((prev) => {
        const uniqueDates = Array.from(new Set([...prev, ...datesToFill]));
        return uniqueDates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
      });
      setSelectedDatesInfo((prev) => [...prev, ...newDatesInfo]);
    }
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

      // Merge dates avoiding duplicates
      setSelectedDates((prev) => {
        const uniqueDates = Array.from(new Set([...prev, ...dates]));
        return uniqueDates.sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
      });

      // Merge date info avoiding duplicates
      setSelectedDatesInfo((prev) => {
        const existingIds = new Set(prev.map((info) => info.id));
        const newDatesInfo = datesInfo.filter((info) => !existingIds.has(info.id));
        return [...prev, ...newDatesInfo];
      });
    }
    setIsLoading(false);
  };

  const markedDates = selectedDates.reduce(
    (acc, date) => {
      acc[date] = {
        ...currentCycle("selected"),
        customStyles: currentCycle("selected").customStyles
      };
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
          onRequestClose={() => !modalLoading && setModalVisible(!modalVisible)}
        >
          <View style={styles.overlay}>
            <View style={styles.modalView}>
              <Text style={styles.modalTextAlert}>Atenção! Alguns dias ficaram faltando</Text>
              <Text style={styles.modalText}>Você gostaria de anotar os dias anteriores?</Text>

              <View style={styles.buttonContainer}>
                <Pressable
                  style={[styles.button, styles.buttonNo]}
                  onPress={() => handleModalResponse("no")}
                  disabled={modalLoading}
                >
                  <Text style={styles.textNo}>Não</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonYes]}
                  onPress={() => handleModalResponse("yes")}
                  disabled={modalLoading}
                >
                  {modalLoading ? (
                    <ActivityIndicator size="small" color="#fff" />
                  ) : (
                    <Text style={styles.textStyle}>Sim</Text>
                  )}
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
