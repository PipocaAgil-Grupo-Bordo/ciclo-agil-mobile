import styled from "styled-components/native";
import { StyledText } from "@components/TextBox/style";
import { InstructionTextProps } from "../type";
import { ColorScheme } from "@styles/globalStyles";

export const Sc = {
  Container: styled.View`
    margin-top: 28px;
    margin-bottom: 42px;
  `,

  Wrapper: styled.View`
    margin: 6px 0px 24px;
  `,

  Text: styled(StyledText)<InstructionTextProps>`
    /* TODO: Doesn't seem to be working properly, this is set up but not being used */
    color: ${({ error }) => (error ? ColorScheme.danger : "#414347")};
    color: ${ColorScheme.textPrimary};
  `
};
