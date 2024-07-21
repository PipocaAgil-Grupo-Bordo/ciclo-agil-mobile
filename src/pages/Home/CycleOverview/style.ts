import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    gap: 20px;
    justify-content: center;
  `,

  Title: styled.Text`
    font-family: "MontserratBold";
    font-size: ${FontScheme.size.subheading}px;
    color: ${ColorScheme.text.primary};
  `,

  OverviewCard: styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background-color: white;
    border-radius: 12px;
  `,

  TextContainer: styled.View``,

  Icon: styled.Image``,

  MainText: styled.Text`
    font-family: "Montserrat";
    font-size: ${FontScheme.size.medium}px;
    color: ${ColorScheme.text.primary};
  `,

  SecondText: styled.Text`
    font-family: "Montserrat";
    color: ${ColorScheme.text.tertiary};
    font-size: ${FontScheme.size.default}px;
  `
};
