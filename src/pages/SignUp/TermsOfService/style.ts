import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    margin-top: 14px;
  `,

  Text: styled.Text`
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
  `,

  Hyperlink: styled.Text`
    color: ${ColorScheme.accent.highlight};
    font-size: ${FontScheme.size.default}px;
  `
};
