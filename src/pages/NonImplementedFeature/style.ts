import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.ScrollView`
    display: flex;
    flex: 1;
    margin-right: 29px;
    margin-left: 21px;
    margin-top: 176px;
    width: 310px;
    min-height: 100vh;
    color: ${ColorScheme.text.primary};
  `,
  Title: styled.Text`
    align-self: center;
    font-family: ${FontScheme.family.secondary};
    font-size: ${FontScheme.size.heading};
  `,
  Text: styled.Text`
    text-align: center;
    align-self: center;
    padding-top: 104px;
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.highlight};
  `
};
