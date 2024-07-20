import styled from "styled-components/native";
import { ButtonStyleProps } from "../type";
import { StyledText } from "@components/TextBox/style";
import { GeneralColors } from "@styles/colors";
import { ColorScheme } from "@styles/globalStyles";

export const Sc = {
  Icon: styled.Image`
    width: 30px;
    height: 30px;
  `,

  ButtonText: styled(StyledText)<ButtonStyleProps>`
    color: ${({ state }) => {
      switch (state) {
        case "accent":
          return GeneralColors.neutralGray.white;
        case "mild":
        case "default":
        default:
          return ColorScheme.text.primary;
      }
    }};
    font-family: ${({ state }) => (state === "accent" ? "MontserratBold" : "Montserrat")};
    font-size: 16px;
  `
};
