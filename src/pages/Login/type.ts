import { KeyboardTypeOptions } from "react-native";
import { RootStackParamList } from "../../types/routeType";
import { StackNavigationProp } from "@react-navigation/stack";
import { Control, FieldErrors } from "react-hook-form";
import { loginObject } from "../../types/auth";

export interface FormInputsType {
  label: string;
  name: string;
  keyboard?: "email-address" | "default";
  autoComplete: "email" | "password";
}

export interface InputsProps {
  control: Control<loginObject>;
  errors: FieldErrors;
}

// TODO: Gotta check if this is something I can re-use in other components outside login,
// hence needing to move it to root types folder
export type NavigationType = StackNavigationProp<RootStackParamList>;
