import { Control, FieldErrors } from "react-hook-form";
import { emailObject } from "@type/auth";

export interface EmailRequestSectionProps {
  control: Control<emailObject>;
  errors: FieldErrors<emailObject>;
}

export interface ButtonListProps {
  onPress: () => void;
  isLoading: boolean;
}
