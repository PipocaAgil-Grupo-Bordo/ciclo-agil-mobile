import styled from "styled-components/native";
import { isSelectedTextStyle } from "../type";
import { ColorScheme, FontScheme } from "@styles/globalStyles";

export const Sc = {
  Text: styled.Text<isSelectedTextStyle>`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.heading}px;
    text-align: center;
    color: ${({ isSelected }) =>
      isSelected ? ColorScheme.accent.highlight : ColorScheme.text.secondary};
    height: ${({ yAxis }) => yAxis}px;
  `
};
