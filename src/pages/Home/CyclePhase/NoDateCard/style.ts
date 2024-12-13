import { FontScheme, NewColorScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    margin: 25px 0px;
    flex-direction: row;
    gap: 14px;
    background-color: ${NewColorScheme.foreground.tertiary};
    border-radius: 12px;
    padding: 14px;
    justify-content: start;
  `,

  MainContent: styled.View`
    gap: 14px;
  `,

  Title: styled.Text`
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.default}px;
    color: ${Palette.neutralBlack[400]};
  `,

  LeftIcon: styled.View`
    background-color: transparent;
    border-radius: 50%;
    border-color: ${NewColorScheme.foreground.primary};
    align-items: center;
    justify-content: center;
  `,

  Subtitle: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
    color: ${NewColorScheme.text.black};
  `
};
