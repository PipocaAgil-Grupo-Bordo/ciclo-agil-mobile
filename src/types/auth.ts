import { KeyboardTypeOptions } from "react-native";

export type loginObject = {
  email: string;
  password: string;
};

export interface FormInputsType {
  label: string;
  name: string;
  keyboard: KeyboardTypeOptions;
  autoComplete?: "email" | "password"|"birthdate-full"|"given-name"
}