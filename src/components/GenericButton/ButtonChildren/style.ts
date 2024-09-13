import styled from "styled-components/native";
import { ButtonStyleProps } from "../type";
import { GeneralColors } from "@styles/colors";
import { ColorScheme, FontScheme } from "@styles/globalStyles";

export const Sc = {
  Icon: styled.Image`
    width: 30px;
    height: 30px;
  `,

  ButtonText: styled.Text<ButtonStyleProps>`
    color: ${({ state }) =>
      state === "accent" ? GeneralColors.neutralGray.white : ColorScheme.text.primary};
    font-family: ${({ state }) =>
      state === "accent" ? FontScheme.family.primarySemiBold : FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
  `
};
