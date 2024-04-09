export interface DropdownProps<Options> {
  label: string;
  currentOption: string;
  options: Options[];
  onChange: (option: Options) => void;
}

export interface DropdownMenuStyle {
  isOpen: boolean;
}

export interface OptionStyle {
  isLast: boolean;
}
