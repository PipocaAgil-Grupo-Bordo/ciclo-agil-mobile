import styled from "styled-components/native";
import { InstructionTextProps } from "../type";
import { ColorScheme, FontScheme } from "@styles/globalStyles";

export const Sc = {
  Container: styled.View`
    flex: 1;
    margin-bottom: 42px;
  `,

  Wrapper: styled.View`
    margin: 6px 0px 24px;
  `,

  Text: styled.Text<InstructionTextProps>`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.small}px;
    color: ${({ error }) => (error ? ColorScheme.accent.danger : "#414347")};
  `
};
