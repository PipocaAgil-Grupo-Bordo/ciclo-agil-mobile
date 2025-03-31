import styled from "styled-components/native";
import { ColorScheme, FontScheme, NewColorScheme } from "src/styles/globalStyles";

export const Sc = {
  Container: styled.View``,

  Title: styled.Text`
    font-family: ${FontScheme.family.secondary};
    font-size: ${FontScheme.size.highlight}px;
    color: ${NewColorScheme.text.primary};
    margin: 32px 0px 24px;
  `,

  ForgottenPassword: styled.Text`
    font-family: ${FontScheme.family.primaryMedium};
    font-size: ${FontScheme.size.small}px;
    color: ${NewColorScheme.accent.link};
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
    gap: 8px;
  `,

  Text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
  `,

  RegisterLink: styled.Text`
    font-family: ${FontScheme.family.primaryMedium};
    font-size: ${FontScheme.size.default}px;
    color: ${NewColorScheme.accent.link};
  `
};
