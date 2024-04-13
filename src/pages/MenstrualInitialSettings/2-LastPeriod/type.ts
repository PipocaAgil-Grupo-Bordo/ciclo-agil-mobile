import { DropdownProps } from "@components/Dropdown/type";
import { ScrollPickerProps } from "@components/ScrollPicker/type";

export type MonthsType =
  | "Janeiro"
  | "Fevereiro"
  | "Março"
  | "Abril"
  | "Maio"
  | "Junho"
  | "Julho"
  | "Agosto"
  | "Setembro"
  | "Outubro"
  | "Novembro"
  | "Dezembro";

export interface MonthPickerProps<Options> extends Pick<DropdownProps<Options>, "onChange"> {}

export interface DaysPickerProps<Items> extends Pick<ScrollPickerProps<Items>, "onIndexChange"> {}
