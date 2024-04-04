import styled from "styled-components/native";
import { StyledText } from "@components/TextBox/style";
import { InstructionTextProps } from "../type";

export const Sc = {
  Container: styled.View`
    margin: 46px 0px;
  `,

  Wrapper: styled.View`
    margin: 6px 0px 24px;
  `,

  Text: styled(StyledText)<InstructionTextProps>`
    font-size: 12px;
    color: ${({ error }) => (error ? "#ff0000" : "#414347")};
  `
};
