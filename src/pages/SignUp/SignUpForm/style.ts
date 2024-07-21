import styled from "styled-components/native";
import { StyledText } from "@components/TextBox/style";
import { InstructionTextProps } from "../type";
import { ColorScheme, FontScheme } from "@styles/globalStyles";

export const Sc = {
  Container: styled.View`
    margin-top: 28px;
    margin-bottom: 42px;
  `,

  Wrapper: styled.View`
    margin: 6px 0px 24px;
  `,

  Text: styled(StyledText)<InstructionTextProps>`
    color: ${({ error }) => (error ? ColorScheme.accent.danger : "#414347")};
    font-size: ${FontScheme.size.default}px;
  `
};
