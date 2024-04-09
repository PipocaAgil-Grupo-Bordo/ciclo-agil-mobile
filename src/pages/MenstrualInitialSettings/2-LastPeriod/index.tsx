import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";
import { Sc } from "./style";
import Header from "./Header";
import DatePicker from "./DatePicker";
import { MonthsType } from "./type";
import { useState } from "react";

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

  return (
    <Sc.Container>
      <Sc.HeaderWrapper>
        <Header />
      </Sc.HeaderWrapper>

      <Sc.DatePickerWrapper>
        <DatePicker onChange={handleCurrentOptionSelection} />
      </Sc.DatePickerWrapper>
    </Sc.Container>
  );
};

export default LastPeriod;
