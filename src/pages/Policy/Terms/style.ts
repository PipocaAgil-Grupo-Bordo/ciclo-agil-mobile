import { StyledText } from "@components/TextBox/style";
import styled from "styled-components/native";

export const Sc = {
  topic: styled.Text`
    font-family: "MontserratBold";
    font-weight: 600;
  `,
  paragraph: styled(StyledText)`
    font-weight: 400;
  `,
  topicParagraph: styled(StyledText)`
    font-weight: 500;
  `
};
