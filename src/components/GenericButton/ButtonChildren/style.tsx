import styled from "styled-components/native";
import { StyledText } from "../../TextBox/style";
import { ButtonStyleProps } from "../type";

export const StyledButtonIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const StyledButtonText = styled(StyledText)<ButtonStyleProps>`
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
`;
