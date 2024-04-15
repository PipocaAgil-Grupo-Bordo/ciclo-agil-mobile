import ScrollPicker from "@components/ScrollPicker";
import { Sc } from "./style";
import { DurationPickerProps } from "../type";

const DurationPicker: React.FC<DurationPickerProps<number>> = ({ onIndexChange, cycle }) => {
  // Days ranging from 7 to 120
  const regularCycle = Array.from({ length: 35 - 21 + 1 }, (_, index) => index + 21);
  const irregularCycle = Array.from({ length: 120 - 7 + 1 }, (_, index) => index + 7);

  const handleDurationBasedOnCycle = () => {
    const isRegular = cycle === "Regular";

    if (isRegular) return regularCycle;

    return irregularCycle;
  };

  return (
    <Sc.Container>
      <ScrollPicker items={handleDurationBasedOnCycle()} onIndexChange={onIndexChange} />
    </Sc.Container>
  );
};

export default DurationPicker;
