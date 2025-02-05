import { dateHelper } from "@utils/dateHelpers";
import { Sc } from "./style";
import { menstrualApi } from "@services/menstrualApi";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { IMenstrualPeriod } from "@type/menstrual";
import { useTokenContext } from "@context/useUserToken";
import Icon from "@icons/DropIcon.svg";

function WeeklySection() {
  const { accessToken } = useTokenContext();
  const [selectedDates, setSelectedDates] = useState<string[]>([]);

  useFocusEffect(
    useCallback(() => {
      fetchMenstrualPeriods();

      return () => {
        setSelectedDates([]);
      };
    }, [accessToken])
  );

  // TODO passar isso para um hook, usamos isso em mais de um lugar

  const fetchMenstrualPeriods = async () => {
    if (!accessToken) return;

    try {
      const response = await menstrualApi.getMenstrualPeriods({ token: accessToken });
      const dates = formatDateList(response.data);
      setSelectedDates(dates);
    } catch (error) {
      console.error("Failed to fetch menstrual periods:", error);
    }
  };

  const formatDateList = (menstrualPeriods: IMenstrualPeriod[]) => {
    return menstrualPeriods.flatMap((period) => period.dates.map((date) => date.date));
  };

  const currentDay = new Date().getDate();
  const daysOfWeek = dateHelper.selectWeek(new Date());
  const weekBlock = ["D", "S", "T", "Q", "Q", "S", "S"];

  const isSelectedDate = (day: number) => {
    const dateString = new Date(new Date().getFullYear(), new Date().getMonth(), day)
      .toISOString()
      .split("T")[0];
    return selectedDates.includes(dateString);
  };

  const getFirstMenstrualDayOfWeek = () => {
    return selectedDates.find((dateString) => {
      const dateObj = new Date(dateString);
      return daysOfWeek.includes(dateObj.getDate()) && isSelectedDate(dateObj.getDate());
    });
  };

  return (
    <Sc.Container>
      {weekBlock.map((week, index) => {
        const day = daysOfWeek[index];
        const isMenstrualDay = isSelectedDate(day);
        const firstMenstrualDay = getFirstMenstrualDayOfWeek();
        const isFirstMenstrualDay =
          !!firstMenstrualDay && new Date(firstMenstrualDay).getDate() === day;

        return (
          <Sc.WeekWrapper key={index}>
            <Sc.Week>{week}</Sc.Week>
            <Sc.DayWrapper
              hasBorder={day === currentDay}
              isSelected={isMenstrualDay}
              isFirstMenstrualDay={isFirstMenstrualDay}
            >
              <Sc.Day
                hasBorder={day === currentDay}
                isSelected={isMenstrualDay}
                isFirstMenstrualDay={isFirstMenstrualDay}
              >
                {isFirstMenstrualDay ? <Icon width={14} height={17} /> : day}
              </Sc.Day>
            </Sc.DayWrapper>
          </Sc.WeekWrapper>
        );
      })}
    </Sc.Container>
  );
}

export default WeeklySection;
