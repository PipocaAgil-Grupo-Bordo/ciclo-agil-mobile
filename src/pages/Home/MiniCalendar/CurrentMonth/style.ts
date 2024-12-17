import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    margin-top: 16px;
    padding-bottom: 12px;
    border-bottom-width: 1px;
    border-color: ${ColorScheme.foreground.primary};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  `,

  CurrentMonth: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
    color: ${ColorScheme.text.primary};
  `,

  StandOut: styled.Text`
    color: ${ColorScheme.text.tertiary};
  `
};
