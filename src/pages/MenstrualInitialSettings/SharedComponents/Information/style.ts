import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    margin-top: 36px;
  `,

  Text: styled.Text`
    font-family: "Montserrat";
    font-size: ${FontScheme.size.medium}px;
    text-align: center;
    color: ${ColorScheme.text.primary};
  `
};
