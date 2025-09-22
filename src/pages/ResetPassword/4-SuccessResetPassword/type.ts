import { EmailFields } from "@type/auth";
import { Control, FieldErrors } from "react-hook-form";

export interface EmailRequestSectionProps {
  control: Control<EmailFields>;
  errors: FieldErrors<EmailFields>;
}

export interface ButtonListProps {
  onPress: () => void;
  isLoading: boolean;
}
