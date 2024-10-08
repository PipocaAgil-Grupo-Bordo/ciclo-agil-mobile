import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    margin-top: 64px;
  `,

  Wrapper: styled.View`
    margin-top: 12px;
    gap: 6px;
  `,

  InstructionWrapper: styled.View``,

  Text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.small}px;
    color: ${ColorScheme.text.primary};
  `
};
