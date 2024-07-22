import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View``,

  Title: styled.Text`
    font-family: ${FontScheme.family.primaryMedium};
    font-size: ${FontScheme.size.medium}px;
    color: ${ColorScheme.accent.highlight};
    margin-bottom: 15px;
  `,

  Members: styled.View`
    gap: 15px;
  `,

  Div: styled.View`
    flex-direction: row;
    align-items: center;
    gap: 6px;
  `,

  Photo: styled.Image`
    height: 36px;
    width: 36px;
    border-radius: 99px;
  `,

  NameWrapper: styled.TouchableOpacity``,

  Name: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
  `
};
