import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    margin: 25px 0px;
    gap: 18px;
  `,

  Title: styled.Text`
    font-size: 18px;
    font-family: "MontserratBold";
    color: ${ColorScheme.textPrimary};
  `,

  Card: styled.View`
    padding: 16px;
    background-color: ${ColorScheme.foregroundPrimary};
    border-radius: 8px;
  `,

  CardText: styled.Text`
    font-size: 16px;
    font-family: "Montserrat";
    color: ${ColorScheme.textPrimary};
  `
};
