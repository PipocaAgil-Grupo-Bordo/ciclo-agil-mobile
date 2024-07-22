import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.ScrollView`
    padding-left: 24px;
    padding-right: 24px;
    background-color: ${ColorScheme.background.primary};
  `
};
