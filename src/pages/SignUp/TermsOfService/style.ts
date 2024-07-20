import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    margin-top: 14px;
  `,

  Text: styled.Text`
    font-size: 14px;
    color: ${ColorScheme.text.primary};
  `,

  Hyperlink: styled.Text`
    color: #8e37c9;
    color: ${ColorScheme.accent.highlight};
  `
};
