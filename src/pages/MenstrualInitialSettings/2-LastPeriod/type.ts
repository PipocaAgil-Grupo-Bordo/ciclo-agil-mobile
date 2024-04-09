import { DropdownProps } from "@components/Dropdown/type";

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

export interface DatePickerProps<Options> extends Pick<DropdownProps<Options>, "onChange"> {}
