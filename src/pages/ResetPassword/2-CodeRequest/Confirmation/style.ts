import { FontScheme, NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  CheckMark: styled.Image`
    align-self: center;
    width: 80px;
    margin-top: 40px;
    margin-bottom: 16px;
  `,

  ConfirmationWrapper: styled.View`
    gap: 8px;
    margin-bottom: 24px;
  `,

  ConfirmationText: styled.Text`
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.medium}px;
    color: ${NewColorScheme.text.primary};
    text-align: center;
  `,

  Instructions: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: ${NewColorScheme.text.darkGray};
    line-height: 20px;
  `
};
