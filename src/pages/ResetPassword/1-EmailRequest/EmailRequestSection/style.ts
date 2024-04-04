import styled from "styled-components/native";
import { StyledText } from "@components/TextBox/style";

export const Sc = {
  Container: styled.View``,

  Icon: styled.Image`
    margin: 0 auto;
    width: 66px;
    height: 88px;
    margin-bottom: 36px;
  `,

  Title: styled(StyledText)`
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
  `,

  Text: styled(StyledText)`
    font-size: 16px;
    margin-bottom: 46px;
  `
};
