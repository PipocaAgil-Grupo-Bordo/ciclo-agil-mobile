import styled from "styled-components/native";
import { StyledText } from "../../TextBox/style";
import { ButtonStyleProps } from "../type";

export const StyledButtonIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const StyledButtonText = styled(StyledText)<ButtonStyleProps>`
  font-family: ${({ state }) => (state === "accent" ? "MontserratBold" : "Montserrat")};
`;
