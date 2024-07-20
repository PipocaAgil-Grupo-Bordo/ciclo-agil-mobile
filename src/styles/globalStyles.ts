import { GeneralColors as clr } from "./colors";

export const ColorScheme = {
  background: {
    primary: clr.neutralGray[100],
    secondary: clr.neutralBlue[200],
    tertiary: clr.primary[200]
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
  }
};
