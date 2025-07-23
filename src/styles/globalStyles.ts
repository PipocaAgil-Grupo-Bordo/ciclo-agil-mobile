import { GeneralColors as clr } from "./colors";
import { Palette } from "./palette";

export const ColorScheme = {
  background: {
    primary: clr.neutralGray[100],
    secondary: clr.neutralBlue[200],
    tertiary: clr.primary[200],
    white: clr.neutralGray.white
  },

  foreground: {
    primary: clr.tertiary[200]
  },

  text: {
    primary: clr.neutralBlue[900],
    secondary: clr.neutralGray[600],
    tertiary: clr.neutralGray[700]
  },

  border: {
    primary: clr.neutralGray[400]
  },

  accent: {
    highlight: clr.primary[500],
    danger: clr.danger[500],
    success: clr.success[500]
  },

  icon: {
    idle: clr.neutralGray[400]
  },

  circle: {
    primary: clr.primary[400]
  }
};

export const NewColorScheme = {
  background: {
    primary: Palette.info[100],
    secondary: Palette.secondary[200],
    tertiary: Palette.neutralWhite[500],
    white: Palette.neutralWhite[100],
    disabled: Palette.primary[300]
  },

  foreground: {
    primary: Palette.tertiary[300],
    secondary: Palette.secondary[300],
    tertiary: Palette.primary[100]
  },

  text: {
    primary: Palette.neutralBlack[500],
    secondary: Palette.neutralWhite[100],
    tertiary: Palette.neutralGray[400],
    black: Palette.neutralBlack[700],
    white: Palette.neutralWhite[50],
    gray: Palette.neutralBlack[300]
  },

  border: {
    primary: Palette.neutralGray[400]
  },

  accent: {
    highlight: Palette.primary[500],
    danger: Palette.error[500],
    success: Palette.success[500],
    idle: Palette.neutralGray[400],
    link: Palette.info[500]
  },

  icon: {
    idle: Palette.neutralGray[400]
  },

  circle: {
    primary: Palette.primary[400]
  },

  hover: {
    primary: Palette.primary[400]
  }
};

export const FontScheme = {
  size: {
    small: 12,
    default: 14,
    medium: 16,
    subheading: 18,
    highlight: 20,
    heading: 24
  },

  family: {
    primary: "Montserrat",
    primaryMedium: "MontserratMedium",
    primarySemiBold: "MontserratSemiBold",
    primaryBold: "MontserratBold",
    secondary: "Lora",
    secondaryMedium: "LoraMedium",
    secondarySemiBold: "LoraSemiBold"
  }
} as const;
