import { Sc } from "./style";
import Header from "./Header";
import MonthPicker from "./MonthPicker";
import { MonthsType } from "./type";
import { useState } from "react";
import DaysPicker from "./DaysPicker";
import useMonths from "./Hooks/useMonths";

const LastPeriod: React.FC = () => {
  const months = useMonths();

  const [lastPeriodData, setLastPeriodData] = useState({
    month: months[new Date().getMonth()],
    day: 1
  });

  const indexOfMonth = months.indexOf(lastPeriodData.month!);

  // Ensure the selected dropdown option is saved in a state hook
  const handleMonthSelection = (option: MonthsType) => {
    setLastPeriodData((prevData) => ({
      ...prevData,
      month: option
    }));
  };

  const handleDaySelection = (value: number) => {
    const day = value + 1;

    setLastPeriodData((prevData) => ({
      ...prevData,
      day: day
    }));
  };

  return (
    <Sc.Container>
      <Header />

      <MonthPicker onChange={handleMonthSelection} />

      <DaysPicker month={indexOfMonth} onIndexChange={handleDaySelection} />
    </Sc.Container>
  );
};

export default LastPeriod;
