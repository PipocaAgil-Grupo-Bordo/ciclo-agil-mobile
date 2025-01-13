import { ColorScheme, FontScheme, NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    gap: 8px;
    justify-content: center;
    margin-bottom: 60px;
  `,

  Title: styled.Text`
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.subheading}px;
    color: ${ColorScheme.text.primary};
    padding-bottom: 8px;
  `,

  OverviewCard: styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background-color: white;
    border-color: #f4f4f4;
    border-width: 1px;
    border-radius: 12px;
    elevation: 0.2; /* faz a sombra */
  `,

  TextContainer: styled.View``,

  MainText: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
    color: ${ColorScheme.text.primary};
  `,

  SecondText: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: #7e797e;
  `,
  IconWrapper: styled.View``
};
