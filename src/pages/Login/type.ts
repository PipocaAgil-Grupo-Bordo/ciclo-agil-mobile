import { Control, FieldErrors } from "react-hook-form";
import { LoginFields } from "@type/auth";

export interface FormInputsType {
  label: string;
  name: string;
  keyboard?: "email-address" | "default";
  autoComplete: "email" | "password";
}

export interface InputsProps {
  control: Control<LoginFields>;
  errors: FieldErrors;
}
