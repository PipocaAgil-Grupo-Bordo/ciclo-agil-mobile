import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    position: absolute;
    width: 100%;
  `,

  BackButton: styled.TouchableOpacity`
    position: absolute;
    margin-top: 4px;
    left: -8px;
  `,

  Title: styled.Text`
    font-family: ${FontScheme.family.secondary};
    font-size: ${FontScheme.size.heading}px;
    color: ${ColorScheme.text.primary};
    text-align: center;
    margin-left: 14px;
  `
};
