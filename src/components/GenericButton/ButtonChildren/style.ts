import { GeneralColors } from "@styles/colors";
import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";
import { ButtonStyleProps } from "../type";


export const Sc = {
  Icon: styled.Image`
    width: 30px;
    height: 30px;
  `,

  ButtonText: styled.Text<ButtonStyleProps>`
    color: ${GeneralColors.neutralGray.white};
    font-family: ${({ state }) =>
      state === "accent" ? FontScheme.family.primarySemiBold : FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
  `
};
