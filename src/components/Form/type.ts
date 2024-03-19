import { Control, FieldErrors } from "react-hook-form";
import { KeyboardTypeOptions } from "react-native";

export interface FormInterface {
  formInputs: FormInputsType[];
  control: Control;
  errors: FieldErrors;
}

export interface FormInputsType {
  label: string;
  name: string;
  keyboard: KeyboardTypeOptions;
  autoComplete?: "email" | "password" | "birthdate-full" | "given-name";
}
