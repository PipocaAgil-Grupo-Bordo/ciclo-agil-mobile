import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    gap: 32px;
  `,

  Icon: styled.Image`
    margin: 0 auto;
    width: 80px;
    height: 80px;
  `,

  TextContainer: styled.View`
    gap: 16px;
  `,

  Title: styled.Text`
    font-family: ${FontScheme.family.secondary};
    font-size: ${FontScheme.size.heading}px;
    color: ${ColorScheme.text.primary};
    text-align: center;
  `,

  Text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
    line-height: ${FontScheme.size.highlight}px;
  `
};
