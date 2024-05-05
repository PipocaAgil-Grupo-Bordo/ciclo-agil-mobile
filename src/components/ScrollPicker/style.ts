import styled from "styled-components/native";
import { YAxisStyle } from "./type";

export const Sc = {
  Container: styled.View<YAxisStyle>`
    align-items: center;
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
