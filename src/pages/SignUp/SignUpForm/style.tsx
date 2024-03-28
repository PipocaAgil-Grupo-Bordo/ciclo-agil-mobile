import styled from "styled-components/native";
import { StyledText } from "@components/TextBox/style";
import { InstructionTextProps } from "../type";

export const StyledContainer = styled.View`
  margin: 46px 0px;
`;

export const StyledInstructionWrapper = styled.View`
  margin: 24px 0px;
`;

export const StyledInstructionText = styled(StyledText)<InstructionTextProps>`
  /* margin: 24px 0px; */
  font-size: 12px;
  color: ${({ error }) => (error ? "#ff0000" : "#414347")};
`;
