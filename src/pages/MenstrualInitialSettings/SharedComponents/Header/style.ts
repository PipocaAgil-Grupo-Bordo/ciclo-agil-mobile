import { FontScheme, NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    gap: 16px;
    flex-direction: row;
    align-items: center;
    margin-top: 16px;
  `,
  TitleContainer: styled.View``,

  BackButton: styled.TouchableOpacity``,

  Title: styled.Text`
    font-family: ${FontScheme.family.secondarySemiBold};
    font-size: ${FontScheme.size.highlight}px;
    color: ${NewColorScheme.text.primary};
    line-height: 24px;
    text-align: left;
  `
};
