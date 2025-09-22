import { FontScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";
import styled from "styled-components/native";

export const Sc = {
  Button: styled.TouchableOpacity``,

  Text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.small}px;
    color: ${Palette.info[500]};
    line-height: 16px;
  `
};
