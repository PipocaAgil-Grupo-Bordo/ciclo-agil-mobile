import { GeneralColors } from "@styles/colors";
import { FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";
import { ButtonStyleProps } from "../type";

export const Sc = {
  Icon: styled.Image`
    width: 30px;
    height: 30px;
  `,

  ButtonText: styled.Text<ButtonStyleProps>`
    color: ${GeneralColors.neutralGray.white};
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.medium}px;
  `
};
