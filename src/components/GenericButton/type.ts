import { ReactNode } from "react";

import { ImageSourcePropType, TouchableHighlightProps } from "react-native";

export type StatesType = "accent" | "mild" | "idle" | "default" | "no-style";

export interface ButtonStyleProps {
  state?: StatesType;
  padding?: string;
}

export interface ButtonChildrenProps extends ButtonStyleProps {
  children: ReactNode;
  icon?: ImageSourcePropType;
  disabled?: boolean;
}

export interface GenericButtonProps extends ButtonChildrenProps, TouchableHighlightProps {
  isLoading?: boolean;
  children: ReactNode;
  padding?: string;
}
