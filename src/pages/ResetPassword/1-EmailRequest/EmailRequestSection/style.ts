import styled from "styled-components/native";
import { StyledText } from "@components/TextBox/style";
import { ColorScheme, FontScheme } from "@styles/globalStyles";

export const Sc = {
  Container: styled.View``,

  Icon: styled.Image`
    margin: 0 auto;
    width: 98px;
    height: 98px;
    margin-bottom: 36px;
  `,

  Title: styled.Text`
    font-size: ${FontScheme.size.heading}px;
    text-align: center;
    margin-bottom: 24px;
    font-family: "Lora";
    color: ${ColorScheme.text.primary};
  `,

  Text: styled(StyledText)`
    margin-bottom: 46px;
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
  `
};
