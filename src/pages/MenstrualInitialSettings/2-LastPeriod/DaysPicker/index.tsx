import ScrollPicker from "@components/ScrollPicker";
import { Sc } from "./style";
import { DaysPickerProps } from "../type";

const DaysPicker: React.FC<DaysPickerProps<number>> = ({ onIndexChange }) => {
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  return (
    <Sc.Container>
      <ScrollPicker items={days} onIndexChange={onIndexChange} />
    </Sc.Container>
  );
};

export default DaysPicker;
