import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
  `,

  CurrentMonth: styled.Text`
    color: ${ColorScheme.text.primary};
    font-size: ${FontScheme.size.default}px;
  `,

  StandOut: styled.Text`
    color: ${ColorScheme.text.tertiary};
    font-size: ${FontScheme.size.default}px;
  `
};
