import { LoginFields } from "@type/auth";
import { Control, FieldErrors } from "react-hook-form";

export interface FormInputsType {
  label: string;
  placeholder: string;
  name: string;
  keyboard?: "email-address" | "default";
  autoComplete: "email" | "password";
}

export interface InputsProps {
  control: Control<LoginFields>;
  errors: FieldErrors;
}
