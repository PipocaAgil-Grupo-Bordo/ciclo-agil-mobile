import { NewColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  TopicParagraph: styled.Text`
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.default}px;
    color: ${NewColorScheme.text.primary};
  `,

  Paragraph: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: ${NewColorScheme.text.primary};
    margin: 20px 0px;
  `,

  Container: styled.View`
    margin-top: 84px;
    margin-bottom: 84px;
  `
};
