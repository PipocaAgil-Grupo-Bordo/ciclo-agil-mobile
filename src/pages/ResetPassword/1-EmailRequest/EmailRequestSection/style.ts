import styled from "styled-components/native";
import { StyledText } from "@components/TextBox/style";

export const Sc = {
  Container: styled.View``,

  Icon: styled.Image`
    margin: 0 auto;
    width: 98px;
    height: 98px;
    margin-bottom: 36px;
  `,

  Title: styled.Text`
    font-size: 22px;
    text-align: center;
    margin-bottom: 24px;
    font-family: "Lora";
  `,

  Text: styled(StyledText)`
    margin-bottom: 46px;
  `
};
