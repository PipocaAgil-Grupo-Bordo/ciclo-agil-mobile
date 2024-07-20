import { StyledText } from "@components/TextBox/style";
import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Topic: styled.Text`
    font-family: "MontserratExtraBold";
    font-weight: 600;
    text-align: left;
    margin: 24px 0px;
    color: ${ColorScheme.textPrimary};
  `,

  TopicParagraph: styled.Text`
    font-family: "MontserratBold";
    font-weight: 500;
    font-size: 14px;
    text-align: left;
    color: ${ColorScheme.textPrimary};
  `,

  Paragraph: styled(StyledText)`
    font-weight: 400;
    font-size: 14px;
    text-align: left;
    margin: 20px 0px;
    color: ${ColorScheme.textPrimary};
  `,

  Container: styled.View`
    margin-top: 84px;
    margin-bottom: 84px;
  `
};
