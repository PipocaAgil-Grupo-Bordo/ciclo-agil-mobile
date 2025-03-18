import { ColorScheme, FontScheme } from "src/styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View``,

  Title: styled.Text`
    font-family: ${FontScheme.family.secondary};
    font-size: ${FontScheme.size.heading}px;
    color: ${ColorScheme.text.primary};
    margin: 81px 0px 24px;
  `,

  ForgottenPassword: styled.Text`
    font-family: ${FontScheme.family.primaryMedium};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.accent.highlight};
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

  Text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
  `,

  RegisterLink: styled.Text`
    font-family: ${FontScheme.family.primaryMedium};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.accent.highlight};
  `
};
