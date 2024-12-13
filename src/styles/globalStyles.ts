import { GeneralColors as clr } from "./colors";
import { palette } from "./palette";

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
    idle: clr.neutralGray[900]
  },

  circle: {
    primary: clr.primary[400]
  }
};

export const NewColorScheme = {
  background: {
    primary: palette.info[50],
    secondary: palette.secondary[200],
    tertiary: palette.neutralWhite[500],
    white: palette.neutralWhite[50]
  },

  foreground: {
    primary: palette.tertiary[300],
    secondary: palette.secondary[300],
    tertiary: palette.primary[100]
  },

  text: {
    primary: palette.neutralBlack[600],
    secondary: palette.neutralWhite[100],
    tertiary: palette.neutralGray[400],
    black: palette.neutralBlack[700],
    white: palette.neutralWhite[50]
  },

  border: {
    primary: palette.neutralGray[400]
  },

  accent: {
    highlight: palette.primary[500],
    danger: palette.error[500],
    success: palette.success[500],
    idle: palette.neutralGray[400]
  },

  circle: {
    primary: palette.primary[400]
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
