import { useState } from 'react';
import { View } from 'react-native';
import { styles } from "./style";
import {Calendar,DateData,LocaleConfig} from 'react-native-calendars';
import { ColorScheme } from "@styles/globalStyles";
import {Feather} from "@expo/vector-icons";
import {ptBR} from "../../../utils/localeCalendarConfig";

LocaleConfig.locales["pt-br"] = ptBR
LocaleConfig.defaultLocale = "pt-br"
function CalendarApp() {
  const [day,setDay] = useState<DateData>()
    return (
      <View style = {styles.container}>
        <Calendar 
        style = {styles.calendar}
        renderArrow={(direction: "right" | "left") => <Feather size={24} 
        color = "#e8e8e8" name={`chevron-${direction}`}/> }
        headerStyle = {{borderBottomWidth: 1, borderBottomColor:"#e8e8e8",
        paddingBottom:10, marginBottom:10
        }}
        theme={{
          textMonthFontSize:18,
          todayTextColor: ColorScheme.circle?.primary,
          selectedDayBackgroundColor: ColorScheme.circle?.primary,
          selectedDayTextColor:"#000",
          arrowColor:"#e8e8e8",
          textDayStyle:{color:"#000"},
          arrowStyle:{
            margin:0,
            padding:0,
          }
        }}
        minDate={new Date().toDateString()}
        hideExtraDays
        onDayPress={setDay}
        markedDates={day &&{
          [day.dateString]: {selected: true}
        }}
        />
      </View>
  );
}
export default CalendarApp;