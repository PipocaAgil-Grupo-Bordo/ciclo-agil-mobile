import { StackNavigationProp } from "@react-navigation/stack";

export type RootStackParamList = {
  MainTabs: undefined;
  Login: undefined;
  SignUp: undefined;
  EmailRequest: undefined;
  CodeRequest: CodeRequestRouteParam;
  NewPassword: NewPasswordRouteParam;
  Policy: undefined;
  // Team: undefined;
  LastPeriod: undefined;
  CycleDuration: undefined;
  AuthLoader: undefined;
  MonthlyCalendar: undefined;
  AnnualCalendar: undefined;
  OnboardingCarousel: undefined;
};

export interface CodeRequestRouteParam {
  email: string;
}

export interface NewPasswordRouteParam {
  token: string;
}

export type NavigationType = StackNavigationProp<RootStackParamList>;
