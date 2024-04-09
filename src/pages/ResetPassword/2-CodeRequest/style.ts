import { StyledText } from "@components/TextBox/style";
import styled from "styled-components/native";
import { CodeValidationMessageProps } from "./type";

export const Sc = {
  Container: styled.ScrollView``,

  Wrapper: styled.View`
    flex: 1;
    padding: 0px 24px 24px;
    justify-content: space-between;
    background-color: #fafcff;
  `,
  CodeValidationMessage: styled(StyledText)<CodeValidationMessageProps>`
    font-size: 14px;
    color: ${({ type }) => (type === "unsuccessful" ? "#ff0000" : "#29B126")};
  `
};
