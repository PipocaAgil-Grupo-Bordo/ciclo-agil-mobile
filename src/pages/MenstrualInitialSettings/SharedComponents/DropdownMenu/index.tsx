import Dropdown from "@components/Dropdown";

import { Sc } from "./style";
import { DropdownProps } from "@components/Dropdown/type";

function DropdownMenu<Options>({
  label,
  currentOption,
  options,
  onChange
}: DropdownProps<Options>) {
  return (
    <Sc.Container>
      <Dropdown label={label} currentOption={currentOption} options={options} onChange={onChange} />
    </Sc.Container>
  );
}

export default DropdownMenu;
