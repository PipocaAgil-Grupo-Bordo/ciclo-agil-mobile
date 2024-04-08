import { MonthsType } from "../type";
import { Sc } from "./style";
import Dropdown from "@components/Dropdown";

const DatePicker: React.FC = () => {
  const months: MonthsType[] = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  const getCurrentMonth = () => {
    const currentDate = new Date();
    return currentDate.getMonth();
  };

  return (
    <Sc.Container>
      <Dropdown label="Mês:" currentOption={months[getCurrentMonth()]} options={months} />
    </Sc.Container>
  );
};

export default DatePicker;
