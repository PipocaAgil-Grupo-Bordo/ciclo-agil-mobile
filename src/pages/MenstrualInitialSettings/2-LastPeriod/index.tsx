import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";
import { Sc } from "./style";
import Header from "./Header";
import MonthPicker from "./MonthPicker";
import { MonthsType } from "./type";
import { useState } from "react";
import DaysPicker from "./DaysPicker";

const LastPeriod: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<MonthsType | undefined>();

  const handleBackendIntegration = () => {
    console.log(selectedOption);
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
      <Sc.HeaderWrapper>
        <Header />
      </Sc.HeaderWrapper>

      <MonthPicker onChange={handleCurrentOptionSelection} />

      <DaysPicker onIndexChange={handleIndexChange} />
    </Sc.Container>
  );
};

export default LastPeriod;
