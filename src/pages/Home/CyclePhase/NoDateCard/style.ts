import { ColorScheme, FontScheme, NewColorScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    margin: 25px 0px;
    flex-direction: row;
    gap: 14px;
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
    padding: 16px;
    background-color: transparent;
    border-radius: 50%;
    border-color: ${NewColorScheme.foreground.primary};
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Subtitle: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
    color: ${ColorScheme.text.primary};
  `
};
