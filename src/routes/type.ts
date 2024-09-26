import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  SignUp: undefined;
  EmailRequest: undefined;
  CodeRequest: CodeRequestRouteParam;
  NewPassword: NewPasswordRouteParam;
  Policy: undefined;
  Team: undefined;
  LastPeriod: undefined;
  CycleDuration: undefined;
  AuthLoader: undefined;
  AnnualCalendar: undefined
};

export interface CodeRequestRouteParam {
  email: string;
}

export interface NewPasswordRouteParam {
  token: string;
}

export type NavigationType = StackNavigationProp<RootStackParamList>;
