import { FontScheme } from "@styles/globalStyles";
import { info } from "@styles/palette";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${info[100]};
    color: #1f2024;
  `,
  Title: styled.Text`
    align-self: center;
    font-family: ${FontScheme.family.secondary};
    font-size: ${FontScheme.size.heading}px;
  `,
  Text: styled.Text`
    text-align: center;
    align-self: center;
    padding-top: 104px;
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.highlight}px;
  `
};
