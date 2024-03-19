import { ReactNode } from "react";
import { ColorType, SizeType } from "../../types/globalStyle";

export type TextAlign = "left" | "center" | "right"

export interface StyledTextProps {
  size?: SizeType;
  color?: ColorType;
  align?: TextAlign;
}

export interface TextBoxProps extends StyledTextProps {
  children: ReactNode;
}
