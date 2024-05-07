import { verticalScale } from "@utils/responsivenessHelper";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    align-items: center;
  `,
  Paragraph: styled.Text`
    margin-top: ${verticalScale(50) + "px"};
    margin-bottom: ${verticalScale(50) + "px"};
    text-align: center;
  `
};
