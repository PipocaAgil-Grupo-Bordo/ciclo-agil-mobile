import { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native-gesture-handler";
import { ImageSourcePropType } from "react-native";

export interface ButtonStyleProps {
  state?: "accent" | "mild" | "default";
}

export interface GenericButtonProps extends ButtonStyleProps, TouchableOpacityProps {
  children: ReactNode;
  icon?: ImageSourcePropType;
}