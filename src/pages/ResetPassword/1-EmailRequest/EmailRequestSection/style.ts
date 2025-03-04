import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View``,

  Icon: styled.Image`
    margin: 0 auto;
    width: 98px;
    height: 98px;
    margin-bottom: 36px;
  `,

  Title: styled.Text`
    font-family: ${FontScheme.family.secondary};
    font-size: ${FontScheme.size.heading}px;
    color: ${ColorScheme.text.primary};
    text-align: center;
    margin-bottom: 24px;
  `,

  Text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
    margin-bottom: 46px;
  `
};
