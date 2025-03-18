import { StatesType } from "@components/GenericButton/type";
import { OtpInputProps } from "react-native-otp-entry";

export interface OTPInputProps extends OtpInputProps {
  resendCode: () => void;
}

export interface ButtonsProps {
  onPress: () => void;
}

export interface ButtonsInfo {
  label: string;
  state: StatesType;
  onPress: () => void;
}

export interface CodeValidationMessageProps {
  type: "successful" | "unsuccessful";
}
