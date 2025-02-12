import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useTokenContext } from "@context/useUserToken";
import { menstrualApi } from "@services/menstrualApi";
import { dateHelper } from "@utils/dateHelpers";
import { IMenstrualPeriod } from "@type/menstrual";
import Icon from "@icons/DropIcon.svg";
import { Sc } from "./style";

function WeeklySection() {
  const { accessToken } = useTokenContext();
  const [selectedDates, setSelectedDates] = useState<number[]>([]);

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const daysOfWeek = dateHelper.selectWeek(currentDate);
  const weekBlock = ["D", "S", "T", "Q", "Q", "S", "S"];

  useFocusEffect(
    useCallback(() => {
      fetchMenstrualPeriods();
      return () => setSelectedDates([]);
    }, [accessToken])
  );

  const fetchMenstrualPeriods = async () => {
    if (!accessToken) return;

    const response = await menstrualApi.getMenstrualPeriods({ year, month, token: accessToken });
    const dates = response.data.flatMap((period: IMenstrualPeriod) =>
      period.dates.map(({ date }) => new Date(date).getDate())
    );

    setSelectedDates(Array.from(new Set(dates.filter((day) => daysOfWeek.includes(day)))));
  };

  const firstSelectedDate = Math.min(...selectedDates);

  return (
    <Sc.Container>
      {daysOfWeek.map((day, index) => {
        const isSelected = selectedDates.includes(day);
        const isFirstMenstrualDay = day === firstSelectedDate;
        const hasBorder = day === currentDay;

        return (
          <Sc.WeekWrapper key={index}>
            <Sc.Week>{weekBlock[index]}</Sc.Week>
            <Sc.DayWrapper
              hasBorder={hasBorder}
              isSelected={isSelected}
              isFirstMenstrualDay={isFirstMenstrualDay}
            >
              <Sc.Day
                hasBorder={hasBorder}
                isSelected={isSelected}
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
