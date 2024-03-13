import styled from "styled-components/native";
import { TextMontserrat } from "../../../components/TextBox/style";

export const FormBox = styled.View``;

export const FormButton = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  background-color: #8e37c9;
  border-radius: 10px;
  padding: 16px;
  margin: 34px 0px 24px;
`;

export const FormButtonText = styled(TextMontserrat)`
  color: white;
`;

export const ForgotPasswordText = styled(TextMontserrat)`
  color: #af65e2;
  text-align: right;
  margin: 0px 12px;
`;

export const LoginWrapper = styled.View`
  margin: 34px 0px 24px;
`;

export const RegisterText = styled(TextMontserrat)`
  text-align: center;
`;

export const RegisterLink = styled.Text`
  color: #af65e2;
`;

export const LetsBegin = styled(TextMontserrat)`
  font-size: 24px;
  font-weight: 400;
  margin: 81px 0px 24px;
`;
