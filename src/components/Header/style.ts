import { FontScheme, NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    position: absolute;
    width: 100%;
    margin-top: 10px 0 10px;
  `,
  TitleContainer: styled.View`
    position: absolute;
    width: 100%;
  `,

  BackButton: styled.TouchableOpacity`
    position: absolute;
    margin-top: 4px;
    left: 5px;
  `,

  Title: styled.Text`
    font-family: ${FontScheme.family.secondarySemiBold};
    font-size: ${FontScheme.size.highlight}px;
    color: ${NewColorScheme.text.primary};
    text-align: left;
    margin-left: 48px;
  `
};
