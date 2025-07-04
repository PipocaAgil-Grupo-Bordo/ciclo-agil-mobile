import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

import { InstructionTextProps } from "../type";

export const Sc = {
  Container: styled.View`
    flex: 1;
    margin-bottom: 82px;
  `,

  InputsContainer: styled.View`
    gap: 8px;
    margin-bottom: 15px;
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
