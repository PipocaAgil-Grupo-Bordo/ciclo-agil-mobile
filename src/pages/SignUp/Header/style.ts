import styled from "styled-components/native";
import { TextLora } from "@components/TopicText/style";

export const Sc = {
  Container: styled.View`
    align-items: center;
  `,

  Title: styled(TextLora)`
    font-size: 24px;
    margin: 32px 0px;
  `,

  SubTitle: styled(TextLora)`
    font-size: 16px;
  `
};
