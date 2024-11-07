import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Wrapper: styled.View`
    margin: 42px auto 30px;
  `,

  HeaderWrapper: styled.View`
    margin-bottom: 20px;
  `,

  Title: styled.Text`
    font-family: ${FontScheme.family.secondary};
    font-size: ${FontScheme.size.heading}px;
    color: ${ColorScheme.text.primary};
    text-align: center;
  `,

  SubTitle: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
    text-align: center;
  `
};
