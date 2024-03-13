import { FieldErrors } from "react-hook-form";
import styled from "styled-components/native";
import { StyledInput } from "../../../components/GenericInput/style";
import { loginObject } from "../../../types/loginType";

export interface InputStylesProps {
  errors: FieldErrors<loginObject>;
  name: "email" | "password";
}

export const InputWrapper = styled.View`
  margin-top: 12px;
`;

export const InputBox = styled(StyledInput)<InputStylesProps>`
  border: ${(props) => (props.errors && props.errors[props.name] ? "#FF0000" : "none")};
`;

export const ErrorMessage = styled.Text`
  color: #ff0000;
  font-size: 14px;
`;
