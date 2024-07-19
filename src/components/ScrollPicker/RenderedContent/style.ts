import styled from "styled-components/native";
import { isSelectedTextStyle } from "../type";
import { ColorScheme } from "@styles/globalStyles";

export const Sc = {
  Text: styled.Text<isSelectedTextStyle>`
    font-size: 26px;
    font-family: "Montserrat";
    text-align: center;
    color: ${({ isSelected }) => (isSelected ? ColorScheme.accent : ColorScheme.textSecondary)};
    height: ${({ yAxis }) => yAxis}px;
  `
};
