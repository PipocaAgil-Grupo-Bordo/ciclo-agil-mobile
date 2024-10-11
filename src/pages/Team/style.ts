import { ColorScheme, FontScheme } from "@styles/globalStyles";
import { horizontalScale, verticalScale } from "@utils/responsivenessHelper";

import styled from "styled-components/native";

export const Sc = {
  Title: styled.Text`
    font-family: ${FontScheme.family.secondary};
    font-size: ${FontScheme.size.heading}px;
    color: ${ColorScheme.text.primary};
    text-align: center;
    margin-bottom: 24px;
    width: 74%;
  `,

  Wrapper: styled.View`
    align-items: center;
    justify-content: space-between;
  `,

  SubTitle: styled.Text`
    font-family: ${FontScheme.family.primary};
    color: ${ColorScheme.text.primary};
    font-size: ${FontScheme.size.default}px;
  `
};
