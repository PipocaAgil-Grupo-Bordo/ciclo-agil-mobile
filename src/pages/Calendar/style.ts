import styled from "styled-components/native";
import { FontScheme } from "@styles/globalStyles";

export const Sc = {
  Container: styled.View`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #fafcff;
    padding: ${FontScheme.size.heading}px;
  `
};
