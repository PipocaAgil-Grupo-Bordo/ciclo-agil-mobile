import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    margin: 25px 0px;
    gap: 18px;
  `,

  Title: styled.Text`
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.subheading}px;
    color: ${ColorScheme.text.primary};
  `,

  Card: styled.View`
    padding: 16px;
    background-color: ${ColorScheme.foreground.primary};
    border-radius: 8px;
  `,

  CardText: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
    color: ${ColorScheme.text.primary};
  `
};
