import styled from "styled-components/native";
import { IContainer } from "./group.type";

export const Sc = {
  Grid: styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 28px;
  `,

  Container: styled.View<IContainer>`
    margin-top: ${({ isFirstRow }) => (isFirstRow ? "0" : "18px")};
    width: 50%;
  `
};
