import styled from "styled-components/native";
import { StyledText } from "../../../components/TextBox/style";

export const StyledFormContainer = styled.View``;

export const StyledTitle = styled(StyledText)`
  font-size: 24px;
  font-weight: 400;
  margin: 81px 0px 24px;
`;

export const StyledForgottenPassword = styled(StyledText)`
  color: #af65e2;
  text-align: right;
  margin: 0px 12px;
`;

export const StyledLoginWrapper = styled.View`
  margin: 34px 0px 24px;
`;

export const StyledRegisterWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const StyledRegisterLink = styled(StyledText)`
  color: #af65e2;
`;
