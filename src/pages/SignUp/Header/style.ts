import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    align-items: center;
    padding-bottom: 20px;
  `,

  Wrapper: styled.View`
    margin-bottom: 60px;
    align-items: center;
    justify-content: center;
    align-content: center;
  `,

  SubTitle: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
    color: ${ColorScheme.text.primary};
    width: 100%;
    align-content: center;
  `
};
