import styled from "styled-components/native";
import { StyledText } from "../TextBox/style";
import { ButtonStyleProps } from "./type";

export const StyledButton = styled.TouchableOpacity<ButtonStyleProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
  border-radius: 10px;
  padding: 16px;
  border: ${({ state }) => (!state || state === "default" ? "2px solid #D9D9D9" : "none")};
  background-color: ${({ state }) => {
    switch (state) {
      case "accent":
        return "#8e37c9";
      case "mild":
        return "#EEE1F7";
      case "default":
      default:
        return "#F5F5F5";
    }
  }};
`;

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
