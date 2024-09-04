import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.ScrollView`
    background-color: ${ColorScheme.background.primary};
    padding: 46px 24px 0px;
    position: relative;
  `,

  Wrapper: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding-bottom: 56px;
  `
};
