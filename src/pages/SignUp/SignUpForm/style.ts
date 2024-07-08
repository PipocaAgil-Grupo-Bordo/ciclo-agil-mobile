import styled from "styled-components/native";
import { StyledText } from "@components/TextBox/style";
import { InstructionTextProps } from "../type";

export const Sc = {
  Container: styled.View`
    margin-top: 28px;
    margin-bottom: 42px;
  `,

  Wrapper: styled.View`
    margin: 6px 0px 24px;
  `,

  Text: styled(StyledText)<InstructionTextProps>`
    color: ${({ error }) => (error ? "#ff0000" : "#414347")};
  `
};
