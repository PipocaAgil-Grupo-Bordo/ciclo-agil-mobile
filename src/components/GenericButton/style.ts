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
    padding: ${({ padding }) => padding ?? "14px"};
    height: ${({ padding }) => (padding ? "36px" : "56px")};
    border: ${({ state }) =>
      !state || state === "default" ? `2px solid ${NewColorScheme.accent.highlight}` : "none"};
    background-color: ${({ state }) => {
      switch (state) {
        case "accent":
          return NewColorScheme.accent.highlight;
        case "idle":
          return "#DCBBF0";
        case "mild":
          return ColorScheme.background.secondary;
        case "no-style":
          return NewColorScheme.background.white;
        case "default":
        default:
          return ColorScheme.background.primary;
      }
    }};
  `
};
