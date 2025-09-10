import { ColorScheme, FontScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    background-color: ${ColorScheme.background.white};
    height: 147px;
    justify-content: center;
    align-items: center;
    padding: ${FontScheme.size.small}px ${FontScheme.size.medium}px;
    gap: ${FontScheme.size.small - 4}px;
    border-radius: ${FontScheme.size.small}px;
  `,

  Title: styled.Text`
    font-size: ${FontScheme.size.default}px;
    font-family: ${FontScheme.family.primarySemiBold};
    align-self: flex-start;
    line-height: 20px;
  `,

  Captions: styled.View`
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    gap: ${FontScheme.size.small}px;
  `,

  Division: styled.View`
    flex-direction: row;
    gap: ${FontScheme.size.small - 4}px;
  `,

  GroupCaptions: styled.View`
    flex-direction: row;
    gap: ${FontScheme.size.small}px;
  `,

  Text: styled.Text`
    font-size: ${FontScheme.size.small}px;
    font-weight: 400;
    font-family: ${FontScheme.family.primary};
  `,

  PinkCircle: styled.View`
    background-color: ${ColorScheme.circle.primary};
    width: 18px;
    height: 18px;
    border-radius: 500px;
    border: none;
  `,

  DottedPurpleCircle: styled.View`
    background-color: ${Palette.tertiary[100]};
    width: 18px;
    height: 18px;
    border-radius: 500px;
    border: 0.69px dashed ${ColorScheme.accent.highlight};
  `,

  DottedGoldCircle: styled.View`
    background-color: none;
    width: 18px;
    height: 18px;
    border-radius: 500px;
    border: 0.67px #938e27;
  `,

  DottedFilledCircle: styled.View`
    background-color: #ece9b4;
    width: 18px;
    height: 18px;
    border-radius: 500px;
    border: 0.67px #938e27;
  `
};
