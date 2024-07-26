import styled from "styled-components/native";
import { ColorScheme } from "@styles/globalStyles";
import { FontScheme } from "@styles/globalStyles";

interface GroupCaptionsProps {
  isFirstChild: boolean;
}

export const Sc = {
  Container: styled.View`
    background-color: ${ColorScheme.background.primary};
    justify-content: center;
    align-items: center;
    padding: ${FontScheme.size.medium}px;
    gap: ${FontScheme.size.small - 1}px;
  `,

  Title: styled.Text`
    font-size: ${FontScheme.size.medium}px;
    font-weight: 500;
    font-family: ${FontScheme.family.primary};
    align-self: flex-start;
  `,

  Captions: styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  `,

  Division: styled.View``,

  GroupCaptions: styled.View<GroupCaptionsProps>`
    flex-direction: row;
    margin-bottom: ${({ isFirstChild }) => (isFirstChild ? "13px" : "0px")};
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
