import { verticalScale } from "@utils/responsivenessHelper";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    flex: 1;
    align-items: center;
  `,

  Paragraph: styled.Text`
    margin-top: ${verticalScale(50) + "px"};
    text-align: center;
  `,

  ButtonWrapper: styled.View`
    margin-bottom: ${verticalScale(60) + "px"};
  `
};
