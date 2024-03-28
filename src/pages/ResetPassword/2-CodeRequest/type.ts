import { OtpInputProps } from "react-native-otp-entry";
import { StatesType } from "@components/GenericButton/type";

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
