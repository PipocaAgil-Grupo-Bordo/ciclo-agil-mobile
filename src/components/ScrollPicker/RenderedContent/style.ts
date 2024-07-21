import styled from "styled-components/native";
import { isSelectedTextStyle } from "../type";
import { ColorScheme, FontScheme } from "@styles/globalStyles";

export const Sc = {
  Text: styled.Text<isSelectedTextStyle>`
    font-size: ${FontScheme.size.heading}px;
    font-family: "Montserrat";
    text-align: center;
    color: ${({ isSelected }) => (isSelected ? ColorScheme.accent.highlight : ColorScheme.text.secondary)};
    height: ${({ yAxis }) => yAxis}px;
  `
};
