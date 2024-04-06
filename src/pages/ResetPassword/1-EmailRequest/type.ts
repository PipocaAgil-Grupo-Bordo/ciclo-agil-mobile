import { Control, FieldErrors } from "react-hook-form";
import { EmailFields } from "@type/auth";

export interface EmailRequestSectionProps {
  control: Control<EmailFields>;
  errors: FieldErrors<EmailFields>;
}

export interface ButtonListProps {
  onPress: () => void;
  isLoading: boolean;
}
