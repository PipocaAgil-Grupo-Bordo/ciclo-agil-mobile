import { StyledText } from "@components/TextBox/style";
import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Topic: styled.Text`
    font-family: "MontserratExtraBold";
    font-weight: 600;
    font-size: ${FontScheme.size.default}px;
    text-align: left;
    margin: 24px 0px;
    color: ${ColorScheme.text.primary};
  `,

  TopicParagraph: styled.Text`
    font-family: "MontserratBold";
    font-weight: 500;
    font-size: ${FontScheme.size.default}px;
    text-align: left;
    color: ${ColorScheme.text.primary};
  `,

  Paragraph: styled(StyledText)`
    font-weight: 400;
    font-size: ${FontScheme.size.default}px;
    text-align: left;
    margin: 20px 0px;
    color: ${ColorScheme.text.primary};
  `,

  Container: styled.View`
    margin-top: 84px;
    margin-bottom: 84px;
  `
};
