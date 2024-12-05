import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${ColorScheme.background.primary};
  `
};

