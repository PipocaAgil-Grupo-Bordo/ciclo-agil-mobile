import { Sc } from "./style";
import Header from "./Header";
import MonthPicker from "./MonthPicker";
import { MonthsType } from "./type";
import { useState } from "react";
import DaysPicker from "./DaysPicker";
import useMonths from "./Hooks/useMonths";

const LastPeriod: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<MonthsType | undefined>();
  const months = useMonths();

  const indexOfMonth = months.indexOf(selectedOption!);

  const handleBackendIntegration = () => {
    console.warn(selectedOption);
    // - Make sure this is sent to the db once an endpoint is made
    // - Change name of this function
    // - Handle cases where user doesn't select any month, so it will count the one as default
  };
  handleBackendIntegration();

  // Ensure the selected dropdown option is saved in a state hook
  const handleCurrentOptionSelection = (option: MonthsType) => {
    setSelectedOption(option);
  };

  const handleIndexChange = (value: number) => {
    const day = value + 1;
    console.warn(`Day ${day} selected`);
  };

  return (
    <Sc.Container>
      <Header />

      <MonthPicker onChange={handleCurrentOptionSelection} />

      <DaysPicker month={indexOfMonth} onIndexChange={handleIndexChange} />
    </Sc.Container>
  );
};

export default LastPeriod;
