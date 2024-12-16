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
    align-items: center;
    position: relative;
    overflow: hidden;
  `,

  MainContent: styled.View`
    max-width: 70%;
    gap: 14px;
  `,

  Title: styled.Text`
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.default}px;
    color: ${Palette.neutralBlack[400]};
  `,

  LeftIcon: styled.View`
    width: 32px;
    height: 32px;
    background-color: ${Palette.tertiary[100]};
    border-radius: 80px;
    border-color: ${NewColorScheme.foreground.primary};
    border-width: 1px;
    align-items: center;
    justify-content: center;
  `,

  LeftIconText: styled.Text`
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.default}px;
    color: ${Palette.neutralBlack[400]};
  `,

  Subtitle: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.small}px;
    color: ${NewColorScheme.text.black};
  `,

  IconWrapper: styled.View`
    position: absolute;
    right: 0;
    bottom: 0;
  `
};
