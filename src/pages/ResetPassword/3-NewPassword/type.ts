import { Control, FieldErrors } from "react-hook-form";
import { PasswordResetFields } from "@type/auth";
import { StatesType } from "@components/GenericButton/type";

export interface SubmitButtonsProps {
  SubmitPassword: () => void;
  isLoading: boolean;
}

export interface InputsProps {
  control: Control<PasswordResetFields>;
  errors: FieldErrors;
  errorInstruction: boolean;
}

export interface SubmitButtonsArray {
  label: string;
  state?: StatesType;
  onPress: () => void;
  loading?: boolean;
}
