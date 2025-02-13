const primary = {
  100: "#F4EAFD",
  200: "#EBD9FB",
  300: "#DCBBF7",
  400: "#C690F0",
  500: "#B065E7"
} as const;

const secondary = {
  100: "#E6E5F9",
  200: "#BCBAF1",
  300: "#938FE7",
  400: "6C64DC",
  500: "#0F0A3D"
} as const;

const tertiary = {
  100: "#FCE5F8",
  200: "#F6ABEC",
  300: "#F067E1",
  400: "C937BB",
  500: "#912586"
} as const;

const neutralGray = {
  100: "#EFEFEF",
  200: "#DCDCDC",
  300: "#BEBBBE",
  400: "#9A969A",
  500: "#7E797E",
  600: "#CFC8D5",
  700: "#B2ACB7"
} as const;

const neutralWhite = {
  50: "#FFFFFF",
  100: "#FFFEFE",
  200: "#FAFAFA",
  300: "#F8F7F8",
  400: "#FAF6FD",
  500: "#F9F4FC"
} as const;

const neutralBlack = {
  100: "#676267",
  200: "#535054",
  300: "#474547",
  400: "#3E3C3E",
  500: "#1B1A1B",
  600: "090A0A",
  700: "#000000"
} as const;

const info = {
  50: "#EEF7FF",
  100: "#F7FBFF",
  200: "#BDE1FF",
  300: "#8FCEFF",
  400: "#5AB2FF",
  500: "#194AB4"
} as const;

const error = {
  100: "#FFE1E1",
  200: "#FFC8C8",
  300: "#FFA2A2",
  400: "#FD6C6C",
  500: "#F64545"
} as const;

const success = {
  100: "#DDFBE8",
  200: "#BDE1FF",
  300: "#8FCEFF",
  400: "#5AB2FF",
  500: "#3F97FD"
} as const;

const warning = {
  100: "#FCE8C9",
  200: "#F9D08E",
  300: "#F7B152",
  400: "#F59C36",
  500: "#EE7312"
} as const;

export const Palette = {
  primary,
  secondary,
  tertiary,
  neutralGray,
  neutralWhite,
  neutralBlack,
  info,
  error,
  success,
  warning
};
