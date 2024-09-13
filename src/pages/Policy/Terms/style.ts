import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Topic: styled.Text`
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.medium}px;
    color: ${ColorScheme.text.primary};
    margin: 24px 0px;
  `,

  TopicParagraph: styled.Text`
    font-family: ${FontScheme.family.primaryMedium};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
  `,

  Paragraph: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
    margin: 20px 0px;
  `,

  Container: styled.View`
    margin-top: 84px;
    margin-bottom: 84px;
  `
};
