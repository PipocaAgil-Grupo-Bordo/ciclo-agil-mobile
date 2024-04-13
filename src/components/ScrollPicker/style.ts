import styled from "styled-components/native";
import { yAxisStyle } from "./type";

export const Sc = {
  Container: styled.View<yAxisStyle>`
    align-items: center;
    height: ${({ yAxis }) => yAxis}px;
  `,

  Text: styled.Text<yAxisStyle>`
    font-size: 32px;
    font-family: "Montserrat";
    text-align: center;
    color: #8e37c9;
    height: ${({ yAxis }) => yAxis}px;
  `,

  IndicatorWrapper: styled.View<yAxisStyle>`
    position: absolute;
    background-color: #eee1f7;
    z-index: -1;
    width: 100%;
    border-radius: 10px;
    top: ${({ yAxis }) => yAxis}px;
  `,

  Indicator: styled.View<yAxisStyle>`
    margin-top: ${({ yAxis }) => yAxis}px;
  `
};
