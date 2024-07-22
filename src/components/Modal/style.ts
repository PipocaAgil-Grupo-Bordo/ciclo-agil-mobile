import { ColorScheme, FontScheme } from "@styles/globalStyles";
import { verticalScale } from "@utils/responsivenessHelper";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    align-items: center;
  `,

  Title: styled.Text`
    font-family: ${FontScheme.family.secondary};
    font-size: ${FontScheme.size.heading}px;
    color: ${ColorScheme.text.primary};
    text-align: center;
    margin-bottom: 24px;
    width: 74%;
  `,

  Paragraph: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
    margin-top: ${verticalScale(50) + "px"};
    text-align: center;
  `,

  ButtonWrapper: styled.View`
    margin-top: ${verticalScale(120) + "px"};
    margin-bottom: ${verticalScale(60) + "px"};
  `
};
