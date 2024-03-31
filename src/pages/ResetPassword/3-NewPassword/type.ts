import { Control, FieldErrors } from "react-hook-form";
import { resetPasswordObject } from "@type/auth";
import { StatesType } from "@components/GenericButton/type";

export interface SubmitButtonsProps {
  SubmitPassword: () => void;
  isLoading: boolean;
}

export interface InputsProps {
  control: Control<resetPasswordObject>;
  errors: FieldErrors;
  errorInstruction: boolean;
}

export interface SubmitButtonsArray {
  label: string;
  state?: StatesType;
  onPress: () => void;
  loading?: boolean;
}
