import { CyclePickerProps, CyclesType } from "../type";
import { Sc } from "./style";
import Dropdown from "@components/Dropdown";

const CyclePicker: React.FC<CyclePickerProps<CyclesType>> = ({ onChange }) => {
  const cycles: CyclesType[] = ["Regular", "Irregular"];

  return (
    <Sc.Container>
      <Dropdown label="Seu ciclo é:" currentOption={cycles[0]} options={cycles} onChange={onChange} />
    </Sc.Container>
  );
};

export default CyclePicker;
