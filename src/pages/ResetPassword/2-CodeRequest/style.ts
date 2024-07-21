import { StyledText } from "@components/TextBox/style";
import styled from "styled-components/native";
import { CodeValidationMessageProps } from "./type";
import { ColorScheme } from "@styles/globalStyles";

export const Sc = {
  Container: styled.ScrollView``,

  Wrapper: styled.View`
    flex: 1;
    padding: 32px 24px 24px 24px;
    justify-content: space-between;
    background-color: #fafcff;
  `,

  CodeValidationMessage: styled(StyledText)<CodeValidationMessageProps>`
    font-size: 14px;
    color: ${({ type }) =>
      type === "unsuccessful" ? ColorScheme.accent.danger : ColorScheme.accent.success};
  `,

  Text: styled.Text`
    color: #000;
    z-index: 10;
  `
};
