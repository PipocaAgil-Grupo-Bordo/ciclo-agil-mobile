import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${ColorScheme.background.primary};
    color: ${ColorScheme.text.primary};
  `,
  Title: styled.Text`
    align-self: center;
    font-family: ${FontScheme.family.secondary};
    font-size: ${FontScheme.size.heading};
  `,
  Text: styled.Text`
    text-align: center;
    align-self: center;
    padding-top: 104px;
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.highlight};
  `
};
