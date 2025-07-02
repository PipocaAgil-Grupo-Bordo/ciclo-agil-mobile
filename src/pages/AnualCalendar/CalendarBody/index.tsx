import React, { useCallback, useState } from "react";

import { useTokenContext } from "@context/useUserToken";
import { useFocusEffect } from "@react-navigation/native";
import { menstrualApi } from "@services/menstrualApi";
import { ColorScheme } from "@styles/globalStyles";
import { IMenstrualPeriod } from "@type/menstrual";
import { View, Text, Alert, Modal, Pressable, ActivityIndicator } from "react-native";
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
  const [futureDateModalVisible, setFutureDateModalVisible] = useState(false);
  const [modalLoading, setModalLoading] = useState(false); // Loading state for modal operations

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
        setSelectedDates((prev) => [...prev, pendingDate]);
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

  const handleDayPress = async (day: DateData) => {
    const date = day.dateString;
    const today = new Date().toISOString().split("T")[0];

    if (date > today) {
      setFutureDateModalVisible(true);
      return;
    }

    if (!selectedDates.includes(date)) {
      const gap = calculateDateGap(date);

      if (gap >= 1 && gap <= 7) {
        setPendingDate(date);
        setModalVisible(true);
      } else {
        const newDateInfo = await addMenstrualPeriodDate(date);
        if (newDateInfo) {
          setSelectedDates((prev) => [...prev, date]);
          setSelectedDatesInfo((prev) => [...prev, newDateInfo]);
        }
      }
    } else {
      await deleteMenstrualPeriodDate(date);
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

  const markedDates = selectedDates.reduce(
    (acc, date, index) => {
      if (index === 0) {
        acc[date] = {
          ...currentCycle("firstDay"),
          customStyles: currentCycle("firstDay").customStyles
        };
      } else {
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
