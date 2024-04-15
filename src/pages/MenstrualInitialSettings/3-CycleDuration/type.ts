import { DropdownProps } from "@components/Dropdown/type";
import { ScrollPickerProps } from "@components/ScrollPicker/type";

export type CyclesType = "Regular" | "Irregular";

export interface CyclePickerProps<CyclesType> extends Pick<DropdownProps<CyclesType>, "onChange"> {}

export interface DurationPickerProps<T> extends Pick<ScrollPickerProps<T>, "onIndexChange">  {
  cycle: CyclesType
}

export interface ButtonsProps {
  nextWithData: () => void;
  nextWithoutData: () => void;
}