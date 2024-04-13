import { MonthPickerProps, MonthsType } from "../type";
import { Sc } from "./style";
import Dropdown from "@components/Dropdown";

const MonthPicker: React.FC<MonthPickerProps<MonthsType>> = ({ onChange }) => {
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
    const currentMonth = currentDate.getMonth();
    return months[currentMonth];
  };

  return (
    <Sc.Container>
      <Dropdown
        label="Mês:"
        currentOption={getCurrentMonth()}
        options={months}
        onChange={onChange}
      />
    </Sc.Container>
  );
};

export default MonthPicker;
