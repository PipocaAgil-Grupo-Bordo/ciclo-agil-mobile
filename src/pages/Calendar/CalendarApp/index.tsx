import { useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from "./style";
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { ColorScheme } from "@styles/globalStyles";
import { Feather } from "@expo/vector-icons";
import { ptBR } from "../../../utils/localeCalendarConfig";

LocaleConfig.locales["pt-br"] = ptBR;
LocaleConfig.defaultLocale = "pt-br";

function CalendarApp() {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);


  const handleDayPress = (day: DateData) => {
    const date = day.dateString;

    // Adiciona a data se ainda não foi selecionada
    if (!selectedDates.includes(date)) {
      setSelectedDates([...selectedDates, date]);
    }
  };

  // Configura as datas marcadas
  const markedDates = selectedDates.reduce((acc, date, index) => {
    if (index === 0) {
      // O primeiro dia selecionado fica preenchido de roxo
      acc[date] = { selected: true, selectedColor: ColorScheme.circle?.primary, dotColor: "transparent" };
    } else {
      // Os outros dias são pontilhados
      acc[date] = { marked: true, dotColor: ColorScheme.circle?.primary };
    }
    return acc;
  }, {} as Record<string, any>);

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        renderArrow={(direction: "right" | "left") => (
          <Feather
            size={24}
            color="#e8e8e8"
            name={`chevron-${direction}`}
          />
        )}
        headerStyle={{
          borderBottomWidth: 1,
          borderBottomColor: "#e8e8e8",
          paddingBottom: 10,
          marginBottom: 10
        }}
        theme={{
          textMonthFontSize: 18,
          todayTextColor: ColorScheme.circle?.primary,
          selectedDayBackgroundColor: ColorScheme.circle?.primary,
          selectedDayTextColor: "#000",
          arrowColor: "#e8e8e8",
          textDayStyle: { color: "#000" },
          arrowStyle: {
            margin: 0,
            padding: 0,
          }
        }}
        minDate={new Date().toDateString()}
        hideExtraDays
        onDayPress={handleDayPress}
        markedDates={markedDates}
      />

      <Text style={styles.selected}>
        Data selecionada: {selectedDates.join(', ')}
      </Text>
    </View>
  );
}

export default CalendarApp;
