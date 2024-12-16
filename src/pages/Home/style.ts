import { FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.ImageBackground`
    padding-top: 36px;
    padding-right: ${FontScheme.size.heading}px;
    padding-bottom: ${FontScheme.size.small}px;
    padding-left: ${FontScheme.size.heading}px;
  `
};
