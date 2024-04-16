import { Sc } from "./style";
import Dropdown from "@components/Dropdown";
import { DropdownMenuProps } from "./type";

const DropdownMenu = <Options,>({
  label,
  currentOption,
  options,
  onChange
}: DropdownMenuProps<Options>) => {
  return (
    <Sc.Container>
      <Dropdown label={label} currentOption={currentOption} options={options} onChange={onChange} />
    </Sc.Container>
  );
};

export default DropdownMenu;
