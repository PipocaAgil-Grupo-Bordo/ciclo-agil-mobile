import styled from "styled-components/native";
import { ButtonStyleProps } from "../type";
import { StyledText } from "@components/TextBox/style";

export const Sc = {
  Icon: styled.Image`
    width: 30px;
    height: 30px;
  `,

  ButtonText: styled(StyledText)<ButtonStyleProps>`
    color: ${({ state }) => {
      switch (state) {
        case "accent":
          return "#FFFFFF";
        case "mild":
          return "#000000";
        case "default":
        default:
          return "#1F2024";
      }
    }};
    font-family: ${({ state }) => (state === "accent" ? "MontserratBold" : "Montserrat")};
    font-size: 16px;
  `
};
