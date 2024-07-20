import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    display: flex;
    flex: 1;
    background-color: ${ColorScheme.background.primary};
    padding: 42px 24px;
  `
};
