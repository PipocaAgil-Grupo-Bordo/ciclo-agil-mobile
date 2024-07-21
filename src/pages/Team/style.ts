import { StyledText } from "@components/TextBox/style";
import { ColorScheme, FontScheme } from "@styles/globalStyles";
import { horizontalScale, verticalScale } from "@utils/responsivenessHelper";

import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    flex: 1;
    background-color: ${ColorScheme.background.primary};
    padding-right: ${horizontalScale(21) + "px"};
    padding-left: ${horizontalScale(21) + "px"};
    padding-bottom: ${verticalScale(48) + "px"};
    padding-top: ${verticalScale(100) + "px"};
    justify-content: center;
  `,

  Title: styled.Text`
    font-size: ${FontScheme.size.heading}px;
    text-align: center;
    margin-bottom: 24px;
    width: 74%;
    font-family: Lora;
  `,

  Wrapper: styled.View`
    align-items: center;
    justify-content: space-between;
  `,
  SubTitle: styled(StyledText)`
    color: ${ColorScheme.text.primary};
    font-size: ${FontScheme.size.default}px;
  `
};
