import { ColorScheme, FontScheme, NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.ScrollView`
    background-color: ${ColorScheme.background.primary};
    gap: 32px;
    padding: 132px 16px 16px 16px;
  `,
  Wrapper: styled.View`
    flex: 1;
    gap: 16px;
    justify-content: space-between;
  `,
  CenterWrapper: styled.View`
    gap: 8px;
    align-items: center;
    justify-content: center;
  `,
  Title: styled.Text`
    font-family: ${FontScheme.family.secondarySemiBold};
    font-size: ${FontScheme.size.heading};
    color: ${NewColorScheme.text.darkGray};
    text-align: center;
  `,
  PasswordIllustrator: styled.Image`
    width: 200px;
    object-fit: contain;
    transform: translateX(30px);
  `,
  Text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.highlight};
    color: ${NewColorScheme.text.darkGray};
    text-align: center;
  `
};
