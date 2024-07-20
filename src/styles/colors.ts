const primary = {
  100: "#F4EBFA",
  200: "#EEE1F7",
  300: "#DCC1EE",
  400: "#C691EB",
  500: "#8E37C9",
  600: "#722CA1",
  700: "#6B2997",
  750: "#552179",
  800: "#40195A",
  900: "#321346"
} as const;

const secondary = {
  100: "#F4F7E1",
  200: "#E8EEC1",
  300: "#D5DF94",
  500: "#B5C936",
  600: "#889729",
  700: "#515A18"
} as const;

const tertiary = {
  100: "#ECEBFA",
  200: "#E2E1F7",
  300: "#C3C1EE",
  500: "#3E36C9",
  600: "#2F2997",
  700: "#1C185A"
} as const;

const neutralGray = {
  white: "#FFFFFF",
  100: "#FAFCFF",
  200: "#EFF1F6",
  300: "#E2E4E9",
  400: "#D9D9D9",
  500: "#C7CACF",
  600: "#AFB4BD",
  700: "#8B8F98",
  800: "#61656F",
  900: "#414347",
  black: "#000000"
} as const;

const neutralBlue = {
  50: "#F5F9FF",
  100: "#F2F7FF",
  150: "#EEF3FC",
  200: "#E7ECF4",
  300: "#D7DDE9",
  400: "#BDCBEB",
  500: "#7D93C5",
  550: "#6E7DA0",
  600: "#4E586F",
  700: "#323743",
  800: "#2D3139",
  900: "#1F2024"
} as const;

const danger = {
  100: "#FFEBEB",
  200: "#FFB0B0",
  300: "#FF7171",
  500: "#FF0000",
  600: "#CA0000",
  700: "#850000"
} as const;

export const GeneralColors = {
  primary,
  secondary,
  tertiary,
  neutralGray,
  neutralBlue,
  danger
};
