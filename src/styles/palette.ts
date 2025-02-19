const primary /* Brand color on Figma */ = {
  100: "#F4EAFD",
  200: "#EBD9FB",
  300: "#DCBBF7" /* on figma is #DCBBF0 */,
  400: "#C690F0",
  500: "#B065E7"
} as const;

const secondary /* Secondary on Figma */ = {
  100: "#E6E5F9",
  200: "#BCBAF1",
  300: "#938FE7",
  400: "6C64DC",
  500: "#0F0A3D" /* on figma is #2E3081 */
} as const;

const tertiary /* Complementary on Figma (pink) - all ok */ = {
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
  500: "#7E797E",
  600: "#CFC8D5" /* there isn't on figma */,
  700: "#B2ACB7" /* there isn't on figma */
} as const;

const neutralWhite /* Neutral Colors on figma */ = {
  50: "#FFFFFF" /* there isn't on figma */,
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
  600: "090A0A" /* there isn't on figma */,
  700: "#000000" /* there isn't on figma */
} as const;

const info /* (blue) State Colors on figma */ = {
  50: "#EEF7FF" /* there isn't 50 on figma */,
  100: "#F7FBFF" /* #F7FBFF is in Complementary on figma. In State Colors the right color is #EEF7FF */,
  200: "#BDE1FF",
  300: "#8FCEFF",
  400: "#5AB2FF" /* on figma is #3F97FD */,
  500: "#3F97FD" /* on figma is #194AB4 */
} as const;

const error /* (red) State Colors - all ok */ = {
  100: "#FFE1E1",
  200: "#FFC8C8",
  300: "#FFA2A2",
  400: "#FD6C6C",
  500: "#F64545"
} as const;

const success /* (green) State Colors on figma */ = {
  100: "#DDFBE8",
  200: "#BDE1FF" /* on figma is #BDF5D3 */,
  300: "#8FCEFF" /* no figam é #89ECB0 */,
  400: "#5AB2FF" /* on figma is #4EDA86 */,
  500: "#3F97FD" /* on figma is #25b860 and #3F97FD is on color blue (info) */
} as const;

const warning /* (orange) State Colors on figma */ = {
  100: "#FCE8C9",
  200: "#F9D08E",
  300: "#F7B152",
  400: "#F59C36",
  500: "#EE7312" /* on figma is #F4891B */
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
