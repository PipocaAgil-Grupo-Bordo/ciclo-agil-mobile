import { ColorScheme, FontScheme, NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

import { isSelectedTextStyle } from "../type";
import { Palette } from "@styles/palette";

export const Sc = {
  Text: styled.Text<isSelectedTextStyle>`
    font-family: ${FontScheme.family.primary};
    font-size: 32px;
    text-align: center;
    color: ${ColorScheme.text.secondary};
    background-color: ${({ isSelected }) =>
      isSelected ? Palette.primary[100] : NewColorScheme.background.primary};
    border-radius: 10px;
    height: ${({ yAxis }) => yAxis}px;
  `
};
