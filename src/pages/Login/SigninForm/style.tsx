import { FieldError } from "react-hook-form";
import styled from "styled-components/native";

export const LoginInput = styled.TextInput<{ error?: FieldError }>`
  background-color: #f5f9ff;
  border-radius: 5px;
  height: 56px;
  margin: 12px;
  border: ${(props) => (props.error ? "#FF0000" : "")};
  
`;

export const FormBox = styled.View``;
export const FormButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  background-color: #8e37c9;
  border-radius: 10px;
  padding: 16px;
  margin: 34px 0px 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #af65e2;
  text-align: right;
  margin: 0px 12px;
`;
