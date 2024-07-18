import React, { useState } from "react";
import { Sc } from "./style";
import { Calendar, LocaleConfig } from "react-native-calendars";
import CalendarHeader from "../CalendarHeader";

function CalendarApp() {
  const [_, setSelected] = useState("");

  // Configuration for the calendar to be in Brazilian Portuguese
  LocaleConfig.locales["pt-BR"] = {
    monthNames: Array.from({ length: 12 }, (_, i) => {
      const month = new Date(0, i).toLocaleString("pt-BR", { month: "long" });
      return month.charAt(0).toUpperCase() + month.slice(1);
    }),
    monthNamesShort: Array.from({ length: 12 }, (_, i) =>
      new Date(0, i).toLocaleString("pt-BR", { month: "short" })
    ),
    dayNames: Array.from({ length: 7 }, (_, i) =>
      new Date(1970, 0, i + 4).toLocaleString("pt-BR", { weekday: "long" })
    ),
    dayNamesShort: Array.from({ length: 7 }, (_, i) =>
      new Date(1970, 0, i + 4).toLocaleString("pt-BR", { weekday: "long" })[0].toUpperCase()
    )
  };

  LocaleConfig.defaultLocale = "pt-BR";

  function currentCycle(cycle: string) {
    if (cycle === "firstDay") {
      return {
        customStyles: {
          container: {
            borderWidth: 1.9,
            borderColor: "#DCC1EE",
            backgroundColor: "#DCC1EE"
          }
        }
      };
    }

    if (cycle === "fertile") {
      return {
        customStyles: {
          container: {
            borderWidth: 1.9,
            borderStyle: "dotted",
            borderColor: "#8E37C9"
          }
        }
      };
    }
  }

  return (
    <Sc.Container>
      <Calendar
        onDayPress={(day: any) => {
          setSelected(day.dateString);
        }}
        markingType="custom"
        markedDates={{
          // @ts-expect-error
          "2024-07-11": currentCycle("firstDay")!,
          // @ts-expect-error
          "2024-07-12": currentCycle("fertile")!,
          // @ts-expect-error
          "2024-07-13": currentCycle("fertile")!,
          // @ts-expect-error
          "2024-07-14": currentCycle("fertile")!,
          // @ts-expect-error
          "2024-07-15": currentCycle("fertile")!,
          // @ts-expect-error
          "2024-07-16": currentCycle("fertile")!,
          // @ts-expect-error
          "2024-07-17": currentCycle("fertile")!
        }}
        disableMonthChange={true}
        hideArrows={true}
        renderHeader={CalendarHeader}
        style={{
          backgroundColor: "#fafcff"
        }}
        theme={{
          calendarBackground: "#fafcff",
          textSectionTitleColor: "#6C7072",
          textDayHeaderFontSize: 12,
          textDayFontSize: 14
        }}
      />
    </Sc.Container>
  );
}

export default CalendarApp;
