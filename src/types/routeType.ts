import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined;
  EmailRequest: undefined;
  CodeRequest: undefined;
  NewPassword: undefined;
};

export type NavigationType = StackNavigationProp<RootStackParamList>;
