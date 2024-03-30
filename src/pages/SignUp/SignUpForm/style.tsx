import styled from "styled-components/native";
import { StyledText } from "@components/TextBox/style";
import { InstructionTextProps } from "../type";

export const StyledContainer = styled.View`
  margin: 46px 0px;
`;

export const StyledInstructionWrapper = styled.View`
  margin: 6px 0px 24px;
`;

export const StyledInstructionText = styled(StyledText)<InstructionTextProps>`
  font-size: 12px;
  color: ${({ error }) => (error ? "#ff0000" : "#414347")};
`;
