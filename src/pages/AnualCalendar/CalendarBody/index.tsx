import { useTokenContext } from "@context/useUserToken";
import { useFocusEffect } from "@react-navigation/native";
import { ColorScheme } from "@styles/globalStyles";
import React, { useCallback } from "react";
import { View, Text, Modal, Pressable, ActivityIndicator } from "react-native";
import { CalendarList, LocaleConfig } from "react-native-calendars";

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
  if (cycle === "firstDay" || cycle === "fertile") {
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
      fetchPeriods({}, "replace");
    }, [fetchPeriods])
  );

  const markedDates = selectedDates.reduce(
    (acc, date, index) => {
      const cycleType = index === 0 ? "firstDay" : "fertile";
      acc[date] = {
        ...currentCycle(cycleType),
        customStyles: currentCycle(cycleType).customStyles
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
        renderHeader={renderCustomHeader}
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
