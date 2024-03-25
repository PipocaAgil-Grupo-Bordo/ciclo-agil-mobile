import { Control, FieldErrors } from "react-hook-form";
import { loginObject } from "../../types/auth";

export interface FormInputsType {
  label: string;
  name: string;
  keyboard?: "email-address" | "default";
  autoComplete: "email" | "password";
}

export interface InputsProps {
  control: Control<loginObject>;
  errors: FieldErrors;
}


