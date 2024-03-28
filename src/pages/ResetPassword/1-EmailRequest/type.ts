import { Control, FieldErrors } from "react-hook-form";
import { emailSchemaType } from "../../../types/loginType";

export interface EmailRequestSectionProps {
  control: Control<emailSchemaType>;
  errors: FieldErrors<emailSchemaType>;
}

export interface ButtonListProps {
  onPress: () => void;
  isLoading:boolean
}
