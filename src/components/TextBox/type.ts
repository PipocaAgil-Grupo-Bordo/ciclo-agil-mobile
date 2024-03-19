import { ReactNode } from "react";

type ScaleDefault = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "750" | "800" | "900";
type ScaleHalf = "100" | "200" | "300" | "500" | "600" | "700"
type ScaleGray = "white" | "background" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "black"
type ScaleBlue = "50" | "100" | "150" | "200" | "300" | "400" | "500" | "550" | "600" | "700" | "800" | "900"

type PrimaryType = `primary--${ScaleDefault}`;
type SecondryType = `secondary--${ScaleHalf}`;
type TertiaryType = `tertiary--${ScaleHalf}`;
type WarningType = `warning--${ScaleHalf}`;
type SuccessType = `success--${ScaleHalf}`;
type DangerType = `danger--${ScaleHalf}`;
type OtherType = `other--${ScaleHalf}`;
type NeutralGrayType = `neutral-gray--${ScaleGray}`;
type NeutralBlueTypo = `neutral-blue--${ScaleBlue}`;

export type ColorType = PrimaryType | SecondryType | TertiaryType | WarningType | SuccessType | DangerType | OtherType | NeutralGrayType | NeutralBlueTypo;

export interface StyledTextProps {
  size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl";
  color?: ColorType ;
}

export interface TextBoxProps extends StyledTextProps {
  children: ReactNode;
}
