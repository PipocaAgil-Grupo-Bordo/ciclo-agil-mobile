import styled from "styled-components/native";
import { StyledText } from "@components/TextBox/style";
import { ColorScheme } from "src/styles/globalStyles";

export const Sc = {
  Container: styled.View``,

  Title: styled(StyledText)`
    font-size: 24px;
    color: ${ColorScheme.textPrimary};
    font-weight: 400;
    margin: 81px 0px 24px;
  `,

  ForgottenPassword: styled(StyledText)`
    color: ${ColorScheme.accent};
    text-align: right;
    margin: 0px 12px;
  `,

  LoginWrapper: styled.View`
    margin: 34px 0px 24px;
  `,

  RegisterWrapper: styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `,

  RegisterLink: styled(StyledText)`
    color: ${ColorScheme.accent};
  `
};
