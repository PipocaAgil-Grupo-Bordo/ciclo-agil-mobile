import styled from "styled-components/native";
import { TextMontserrat } from "../TextBox/style";
import { StyledInputProps } from "./type";

export const StyledContainer = styled.View``;

export const StyledLabel = styled(TextMontserrat)`
  margin-bottom: 12px;
`;

export const StyledInput = styled.TextInput<StyledInputProps>`
  background-color: #e7ecf4;
  border-radius: 5px;
  padding-top: 16px;
  padding-bottom: 16px;
  border: ${(props) => (props.errors && props.errors[props.name] ? "#FF0000" : "none")};
`;

export const StyledInputError = styled(TextMontserrat)`
  color: #ff0000;
  font-size: 14px;
`;
