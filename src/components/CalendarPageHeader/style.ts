import { FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    width: 100%;
    padding: ${FontScheme.size.medium + 22}px ${FontScheme.size.highlight}px
      ${FontScheme.size.medium}px;
    align-items: center;
    gap: 61px;
    flex-direction: row;
  `,

  BackButton: styled.TouchableOpacity`
    margin-top: 4px;
    background-color: transparent;
  `
};
