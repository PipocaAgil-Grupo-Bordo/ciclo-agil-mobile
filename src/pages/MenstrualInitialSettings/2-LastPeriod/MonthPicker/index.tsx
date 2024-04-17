import useMonths from "../Hooks/useMonths";
import { MonthPickerProps, MonthsType } from "../type";
import { Sc } from "./style";
import Dropdown from "@components/Dropdown";

const MonthPicker: React.FC<MonthPickerProps<MonthsType>> = ({ onChange }) => {
  const months = useMonths();

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
