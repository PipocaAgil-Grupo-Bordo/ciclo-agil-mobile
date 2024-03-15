import { KeyboardTypeOptions } from "react-native";
import { RootStackParamList } from "../../types/routeType";
import { StackNavigationProp } from "@react-navigation/stack";

export interface FormInputsType {
  label: string;
  name: string;
  keyboard: KeyboardTypeOptions;
  autoComplete: "email" | "password";
}

// TODO: Gotta check if this is something I can re-use in other components outside login, 
// hence needing to move it to root types folder
export type NavigationType = StackNavigationProp<RootStackParamList>;