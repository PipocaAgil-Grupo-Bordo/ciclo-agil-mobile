import styled from "styled-components/native";
import { ButtonStyleProps } from "./type";

export const StyledButton = styled.TouchableHighlight<ButtonStyleProps>`
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
