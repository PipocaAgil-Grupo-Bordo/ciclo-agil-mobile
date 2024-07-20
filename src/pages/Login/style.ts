import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.ScrollView`
    background-color: ${ColorScheme.background.primary};
  `,

  Wrapper: styled.View`
    padding: 60px 30px 30px 30px;
    justify-content: center;
    height: 100%;
  `
};
