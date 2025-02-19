const primary /* Brand color on Figma */ = {
  100: "#F4EAFD",
  200: "#EBD9FB",
  300: "#DCBBF0",
  400: "#C690F0",
  500: "#B065E7"
} as const;

const secondary /* Secondary on Figma */ = {
  100: "#E6E5F9",
  200: "#BCBAF1",
  300: "#938FE7",
  400: "6C64DC",
  500: "#2E3081"
} as const;

const tertiary /* Complementary on Figma (pink) */ = {
  100: "#FCE5F8",
  200: "#F6ABEC",
  300: "#F067E1",
  400: "C937BB",
  500: "#912586"
} as const;

const neutralGray /* Neutral Colors on figma */ = {
  100: "#EFEFEF",
  200: "#DCDCDC",
  300: "#BEBBBE",
  400: "#99969A",
  500: "#7E797E"
} as const;

const neutralWhite /* Neutral Colors on figma */ = {
  50: "#FFFFFF",
  100: "#FCFCFC",
  200: "#FAFAFA",
  300: "#F8F7F8",
  400: "#FAF6FD",
  500: "#F9F4FC"
} as const;

const neutralBlack /* Neutral Colors on figma */ = {
  100: "#676267",
  200: "#535054",
  300: "#474547",
  400: "#3E3C3E",
  500: "#1B1A1B",
  600: "#090A0A",
  700: "#000000"
} as const;

const info /* State Colors on figma (blue) */ = {
  100: "#EEF7FF",
  200: "#BDE1FF",
  300: "#8FCEFF",
  400: "#3F97FD",
  500: "#194AB4"
} as const;

const error /* State Colors (red) */ = {
  100: "#FFE1E1",
  200: "#FFC8C8",
  300: "#FFA2A2",
  400: "#FD6C6C",
  500: "#F64545"
} as const;

const success /* State Colors on figma (green) */ = {
  100: "#DDFBE8",
  200: "#BDF5D3",
  300: "#89ECB0",
  400: "#4EDA86",
  500: "#25b860"
} as const;

const warning /* State Colors on figma (orange) */ = {
  100: "#FCE8C9",
  200: "#F9D08E",
  300: "#F7B152",
  400: "#F59C36",
  500: "#F4891B"
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
