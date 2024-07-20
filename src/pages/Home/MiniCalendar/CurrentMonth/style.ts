import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
  `,

  CurrentMonth: styled.Text`
    color: ${ColorScheme.textPrimary};
  `,

  StandOut: styled.Text`
    color: ${ColorScheme.textTertiary};
  `
};
