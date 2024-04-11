import { StyledText } from "@components/TextBox/style";
import styled from "styled-components/native";

export const Sc = {
  topic: styled.Text`
    font-family: "MontserratExtraBold";
    font-weight: 600;
    text-align: left;
    margin: 24px 0px;
  `,
  topicParagraph: styled.Text`
    font-family: "MontserratBold";
    font-weight: 500;
    font-size: 14px;
    text-align: left;
  `,
  paragraph: styled(StyledText)`
    font-weight: 400;
    font-size: 14px;
    text-align: left;
    margin: 20px 0px;
  `
};