import styled from "styled-components/native";
import { isSelectedTextStyle } from "../type";

export const Sc = {
  Text: styled.Text<isSelectedTextStyle>`
    font-size: 26px;
    font-family: "Montserrat";
    text-align: center;
    color: ${({ isSelected }) => (isSelected ? "#8e37c9" : "#AFB4BD")};
    height: ${({ yAxis }) => yAxis}px;
  `
};
