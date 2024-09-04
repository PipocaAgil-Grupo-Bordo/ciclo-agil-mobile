import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.ScrollView`
    padding: 24px;
    background-color: ${ColorScheme.background.primary};
  `
};
