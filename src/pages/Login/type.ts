import { KeyboardTypeOptions } from "react-native";

export interface FormInputsType {
  label: string;
  name: string;
  keyboard: KeyboardTypeOptions;
  autoComplete: "email" | "password";
}