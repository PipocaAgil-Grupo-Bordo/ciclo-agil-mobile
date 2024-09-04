import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  CheckMark: styled.Image`
    align-self: center;
    width: 80px;
    margin-top: 64px;
    margin-bottom: 16px;
  `,

  ConfirmationWrapper: styled.View`
    gap: 6px;
    margin-bottom: 38px;
  `,

  ConfirmationText: styled.Text`
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.medium}px;
    color: ${ColorScheme.text.primary};
    text-align: center;
  `,

  Instructions: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
    color: ${ColorScheme.text.primary};
  `
};
