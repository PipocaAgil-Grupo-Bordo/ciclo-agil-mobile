import { StyledText } from "@components/TextBox/style";
import styled from "styled-components/native";

export const Sc = {
  topic: styled.Text`
    font-family: "MontserratBold";
    font-weight: 600;
    background-color: yellow;
  `,
  topicParagraph: styled(StyledText)`
    font-weight: 500;
    font-size: 14px;
    background-color: aqua;
  `,
  paragraph: styled(StyledText)`
    font-weight: 400;
    font-size: 14px;
    background-color: brown;
  `
};
