import styled from "styled-components/native";
import { FontScheme, NewColorScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";

import { ButtonStyleProps } from "../type";

export const Sc = {
  Icon: styled.Image`
    width: 30px;
    height: 30px;
  `,

  ButtonText: styled.Text<ButtonStyleProps & { disabled?: boolean }>`
    color: ${({ state }) => {
      if (state === "accent" || state === "idle") {
        return Palette.neutralWhite[50];
      }
      return NewColorScheme.accent.highlight;
    }};
    font-family: ${FontScheme.family.primary};
    line-height: 24px;
    font-weight: 700;
    font-size: ${FontScheme.size.medium}px;
    opacity: ${({ disabled, state }) => (state != "idle" && disabled ? 0.4 : 1)};
  `
};
