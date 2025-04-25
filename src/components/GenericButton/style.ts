import { ColorScheme, NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

import { ButtonStyleProps } from "./type";

export const Sc = {
  Button: styled.TouchableHighlight<ButtonStyleProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 25px;
    border-radius: 10px;
    padding: 14px;
    border: ${({ state }) =>
      !state || state === "default" ? `2px solid ${ColorScheme.border.primary}` : "none"};
    background-color: ${({ state }) => {
      switch (state) {
        case "accent":
          return NewColorScheme.accent.highlight;
        case "mild":
          return ColorScheme.background.secondary;
        case "no-style":
        case "default":
        default:
          return ColorScheme.background.primary;
      }
    }};
  `
};
