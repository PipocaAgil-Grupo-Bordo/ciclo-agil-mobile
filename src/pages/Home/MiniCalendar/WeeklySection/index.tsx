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
    }, [])
  );

  const fetchMenstrualPeriods = async () => {
    if (accessToken) {
      const response = await menstrualApi.getMenstrualPeriods({ token: accessToken });
      const dates = formatDateList(response.data);
      setSelectedDates(dates);
    }
  };

  const formatDateList = (menstrualPeriods: IMenstrualPeriod[]) => {
    return menstrualPeriods.flatMap((menstrualPeriod: IMenstrualPeriod) => {
      return menstrualPeriod.dates.map((menstrualPeriodDate) => menstrualPeriodDate.date);
    });
  };

  const currentDay = new Date().getDate();
  const date = new Date();
  const daysOfWeek = dateHelper.selectWeek(date);
  const weekBlock = [
    { id: 0, week: "D" },
    { id: 1, week: "S" },
    { id: 2, week: "T" },
    { id: 3, week: "Q" },
    { id: 4, week: "Q" },
    { id: 5, week: "S" },
    { id: 6, week: "S" }
  ];

  const isSelectedDate = (day: number) => {
    const dateString = new Date(date.getFullYear(), date.getMonth(), day)
      .toISOString()
      .split("T")[0];
    return selectedDates.includes(dateString);
  };

  const getFirstMenstrualDayOfWeek = () => {
    return selectedDates.find((dateString) => {
      const dateObj = new Date(dateString);
      return daysOfWeek.includes(dateObj.getDate());
    });
  };

  return (
    <Sc.Container>
      {weekBlock.map((block) => {
        const day = daysOfWeek[block.id];
        const isMenstrualDay = isSelectedDate(day);
        const firstMenstrualDay = getFirstMenstrualDayOfWeek();
        const isFirstMenstrualDay =
          !!firstMenstrualDay && new Date(firstMenstrualDay).getDate() === day;

        return (
          <Sc.WeekWrapper key={block.id}>
            <Sc.Week>{block.week}</Sc.Week>
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
