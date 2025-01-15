import { FontScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";
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
    color: ${Palette.neutralBlack[400]};
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

  TextContainer: styled.View`
    flex-direction: column;
    gap: 4px;
  `,

  MainText: styled.Text`
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.medium}px;
    color: ${Palette.neutralBlack[400]};
  `,

  SecondText: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: ${Palette.neutralGray[500]};
  `,
  IconWrapper: styled.View``
};
