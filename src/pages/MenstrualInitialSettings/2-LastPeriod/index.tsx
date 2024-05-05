import { Sc } from "./style";
import { MonthsType } from "./type";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";
import Header from "@components/Header";
import Buttons from "../SharedComponents/Buttons";
import Information from "../SharedComponents/Information";
import DropdownMenu from "../SharedComponents/DropdownMenu";
import ScrollableMenu from "../SharedComponents/ScrollableMenu";

const LastPeriod: React.FC = () => {
  // An array with all the capitalized months in portuguese
  const months: MonthsType[] = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(new Date().getFullYear(), index, 1);
    const monthName = date.toLocaleString("pt-BR", { month: "long" });
    return (monthName.charAt(0).toUpperCase() + monthName.slice(1)) as MonthsType;
  });

  const [lastPeriodData, setLastPeriodData] = useState({
    month: months[new Date().getMonth()], // Set the current month as default
    day: 1
  });
  const indexOfMonth = months.indexOf(lastPeriodData.month!);

  const currentYear = new Date().getFullYear();
  const currentMonth = indexOfMonth + 1;
  const numberOfDays = new Date(currentYear, currentMonth, 0).getDate();

  // Generate an array of days based on the selected month.
  const days = Array.from({ length: numberOfDays }, (_, index) => index + 1);

  const navigation = useNavigation<NavigationType>();

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
      <Sc.TopWrapper>
        <Header title="Qual foi a data de início da sua última menstruação?" />

        <DropdownMenu
          label="Mês:"
          onChange={handleMonthSelection}
          options={months}
          currentOption={lastPeriodData.month}
        />

        <ScrollableMenu items={days} onIndexChange={handleDaySelection} />

        <Information text="Não se preocupe, você pode registrar a data de início da sua última menstruação mais tarde ou marcar o início de uma nova" />
      </Sc.TopWrapper>

      <Buttons
        // Placeholders for now till backend integration
        nextWithData={() => navigation.navigate("CycleDuration")}
        nextWithoutData={() => navigation.navigate("CycleDuration")}
      />
    </Sc.Container>
  );
};

export default LastPeriod;
