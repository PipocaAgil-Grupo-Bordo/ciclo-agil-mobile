import ScrollPicker from "@components/ScrollPicker";
import { Sc } from "./style";
import { DaysPickerProps } from "../type";

const DaysPicker: React.FC<DaysPickerProps<number>> = ({
  onIndexChange,
  month = new Date().getMonth() // Default to current month
}) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = month + 1;
  const numberOfDays = new Date(currentYear, currentMonth, 0).getDate();

  // Generate an array of days based on the selected month.
  const days = Array.from({ length: numberOfDays }, (_, index) => index + 1);

  return (
    <Sc.Container>
      <ScrollPicker items={days} onIndexChange={onIndexChange} />
    </Sc.Container>
  );
};

export default DaysPicker;
