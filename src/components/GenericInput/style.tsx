import styled from "styled-components/native";
import { StyledInputProps } from "./type";
import { StyledText } from "@components/TextBox/style";
import MaskInput from "react-native-mask-input";

export const StyledContainer = styled.View``;

export const StyledLabel = styled(StyledText)`
  margin-bottom: 12px;
`;

export const StyledInput = styled(MaskInput)<StyledInputProps>`
  background-color: #e7ecf4;
  border-radius: 5px;
  padding: 16px;
  border: ${(props) => (props.errors && props.errors[props.name] ? "#FF0000" : "none")};
`;

export const StyledInputError = styled(StyledText)`
  color: #ff0000;
  font-size: 14px;
`;
