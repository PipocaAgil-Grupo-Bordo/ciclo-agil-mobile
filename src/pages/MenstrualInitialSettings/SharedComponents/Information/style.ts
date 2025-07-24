import { FontScheme, NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View``,

  Text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
    color: ${NewColorScheme.text.primary};
    line-height: ${FontScheme.size.medium * 1.5}px;
    text-align: center;
  `
};
