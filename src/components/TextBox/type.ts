import { ReactNode } from "react";
import { ColorType, SizeType } from "../../types/globalStyle";

export interface StyledTextProps {
  size: SizeType;
  color: ColorType;
}

export interface TextBoxProps extends StyledTextProps {
  children: ReactNode;
}
