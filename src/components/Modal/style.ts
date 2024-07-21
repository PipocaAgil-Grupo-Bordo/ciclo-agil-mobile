import { FontScheme } from "@styles/globalStyles";
import { verticalScale } from "@utils/responsivenessHelper";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    align-items: center;
  `,

  Title: styled.Text`
    font-size: ${FontScheme.size.heading}px;
    text-align: center;
    margin-bottom: 24px;
    width: 74%;
    font-family: Lora;
  `,

  Paragraph: styled.Text`
    margin-top: ${verticalScale(50) + "px"};
    margin-bottom: ${verticalScale(50) + "px"};
    text-align: center;
  `
};
