import styled from "styled-components/native";
import { FontScheme } from "@styles/globalStyles";

export const Sc = {
  Container: styled.ScrollView`
    display: flex;
    flex: 1;
    padding: 28px 24px;
    background-color: #fafcff;
    padding: ${FontScheme.size.heading}px;
  `
};