import styled from "styled-components/native";
import { ColorScheme } from "@styles/globalStyles";
import { FontScheme } from "@styles/globalStyles";

export const Sc = {
  Captions: styled.View`
    flex-direction: row;
    gap: 96px;
  `,

  LeftCaptions: styled.View`
    flex-direction: column;
  `,

  RightCaptions: styled.View`
    flex-direction: column;
  `,

  GroupCaptions: styled.View`
    flex-direction: row;
    margin-bottom: 13px;
    gap: 12px;
  `,

  Container: styled.View`
    width: 358px;
    height: 112px;
    margin: 0 auto;
    background-color: ${ColorScheme.white.primary};
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 11px;
  `,

  Title: styled.Text`
    font-size: 16px;
    font-weight: 500;
    font-family: ${FontScheme.family.primary};
    line-height: 19.5px;
    align-self: flex-start;
  `,

  Text: styled.Text`
    font-size: 12px;
    font-weight: 400;
    font-family: ${FontScheme.family.primary};
    line-height: 18px;
  `,

  PinkCircle: styled.View`
    background-color: ${ColorScheme.circle.primary};
    width: 18px;
    height: 18px;
    border-radius: 500px;
    border: none;
  `,

  DottedPurpleCircle: styled.View`
    background-color: none;
    width: 18px;
    height: 18px;
    border-radius: 500px;
    border: 1px dotted ${ColorScheme.accent.highlight};
  `,

  DottedGoldCircle: styled.View`
    background-color: none;
    width: 18px;
    height: 18px;
    border-radius: 500px;
    border: 1px dotted #976f29;
  `,

  DottedFilledCircle: styled.View`
    background-color: #faf4eb;
    width: 18px;
    height: 18px;
    border-radius: 500px;
    border: 1px dotted #976f29;
  `
};
