import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined;
  EmailRequest: undefined;
  CodeRequest: CodeRequestRouteParam;
  NewPassword: undefined;
};

export interface CodeRequestRouteParam {
  email: string;
}

export type NavigationType = StackNavigationProp<RootStackParamList>;
