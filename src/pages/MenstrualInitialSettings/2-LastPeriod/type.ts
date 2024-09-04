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

export interface DaysPickerProps<Items> extends Pick<ScrollPickerProps<Items>, "onIndexChange"> {
  month: number;
}
