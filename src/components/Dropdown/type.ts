export interface DropdownProps<Options> {
  label: string;
  currentOption: string;
  options: Options[];
}

export interface DropdownMenuStyle {
  isOpen: boolean;
}

export interface OptionStyle {
  isLast: boolean;
}