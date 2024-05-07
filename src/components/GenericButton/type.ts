import { ReactNode } from "react";
import { ImageSourcePropType, TouchableHighlightProps } from "react-native";

export type StatesType = "accent" | "mild" | "default" | "no-style";

export interface ButtonStyleProps {
  state?: StatesType;
}

export interface ButtonChildrenProps extends ButtonStyleProps {
  children: ReactNode;
  icon?: ImageSourcePropType;
}

export interface GenericButtonProps extends ButtonChildrenProps, TouchableHighlightProps {
  isLoading?: boolean;
  children: ReactNode;
}
