import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.ScrollView`
    display: flex;
    flex: 1;
    padding: 28px 24px;
    background-color: ${ColorScheme.background.primary};
    padding: ${FontScheme.size.heading}px;
  `
};
