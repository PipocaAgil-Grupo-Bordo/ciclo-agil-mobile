import styled from "styled-components/native";
import { YAxisStyle, isSelectedTextStyle } from "./type";

export const Sc = {
  Container: styled.View<YAxisStyle>`
    align-items: center;
    height: ${({ yAxis }) => yAxis}px;
  `,

  Text: styled.Text<isSelectedTextStyle>`
    font-size: 32px;
    font-family: "Montserrat";
    text-align: center;
    color: ${({ isSelected }) => (isSelected ? "#8e37c9" : "#AFB4BD")};
    height: ${({ yAxis }) => yAxis}px;
  `,

  IndicatorWrapper: styled.View<YAxisStyle>`
    position: absolute;
    background-color: #eee1f7;
    z-index: -1;
    width: 100%;
    border-radius: 10px;
    top: ${({ yAxis }) => yAxis}px;
  `,

  Indicator: styled.View<YAxisStyle>`
    margin-top: ${({ yAxis }) => yAxis}px;
  `
};
