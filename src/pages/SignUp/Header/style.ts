import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    margin-top: 22px;
    align-items: center;
  `,

  Wrapper: styled.View`
    margin-bottom: 60px;
    align-items: center;
    justify-content: center;
    align-content: center;
  `,

  SubTitle: styled.Text`
    font-size: 14px;
    width: 90%;
    align-content: center;
    font-family: "Montserrat";
    color: ${ColorScheme.text.primary};
  `
};
