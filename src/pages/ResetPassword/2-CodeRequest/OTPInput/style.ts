import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Button: styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: 10px;
  `,

  Text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.small}px;
    color: ${ColorScheme.text.primary};
  `
};
