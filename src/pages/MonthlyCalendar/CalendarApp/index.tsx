import { useTokenContext } from "@context/useUserToken";
import { useFocusEffect } from "@react-navigation/native";
import { ColorScheme } from "@styles/globalStyles";
import React, { useCallback } from "react";
import { View, Text, Modal, Pressable, ActivityIndicator } from "react-native";
import { Calendar, DateData, LocaleConfig } from "react-native-calendars";

import CalendarHeader from "../CalendarHeader";
import { styles } from "./style";
import { useMenstrualCalendar } from "@hooks/useMenstrualCalendar";
import { ptBR } from "@utils/localeCalendarConfig";

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
  const { accessToken } = useTokenContext();

  const {
    selectedDates,
    isLoading,
    modalVisible,
    futureDateModalVisible,
    modalLoading,
    setModalVisible,
    setFutureDateModalVisible,
    handleDayPress,
    handleModalResponse,
    fetchPeriods
  } = useMenstrualCalendar(accessToken);

  useFocusEffect(
    useCallback(() => {
      const currentDate = new Date();
      fetchPeriods(
        { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1 },
        "replace"
      );
    }, [fetchPeriods])
  );

  const handleMonthChange = (dateInfo: DateData) => {
    fetchPeriods({ year: dateInfo.year, month: dateInfo.month }, "merge");
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

  const renderCustomHeader = (date: any) => {
    return (
      <View style={styles.containerHeader}>
        <CalendarHeader date={date} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
        renderHeader={renderCustomHeader}
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
              <Text style={styles.modalTextAlert}>Datas futuras não podem ser adicionadas!</Text>
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
