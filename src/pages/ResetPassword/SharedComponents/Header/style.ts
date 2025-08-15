import { FontScheme, NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    gap: 12px;
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
  `,

  TitleContainer: styled.View`
    flex: 1;
  `,

  BackButton: styled.TouchableOpacity``,

  Title: styled.Text`
    font-family: ${FontScheme.family.secondarySemiBold};
    font-size: ${FontScheme.size.heading}px;
    color: ${NewColorScheme.text.primary};
    line-height: 30px;
    text-align: left;
  `
};
