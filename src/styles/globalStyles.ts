import styled from "styled-components/native";
import { GeneralColors as clr } from "./colors";

// I don't know why this is here, it will be deleted later
export const Gs = {
  Title: styled.Text`
    font-size: 24px;
    text-align: center;
    margin-bottom: 24px;
    width: 74%;
    font-family: Lora;
  `
};

export const ColorScheme = {
  backgroundPrimary: clr.neutralGray[100],
  backgroundSecondary: clr.neutralBlue[200],
  textPrimary: clr.neutralBlue[900],
  textSecondary: clr.neutralGray[600],
  borderPrimary: clr.neutralGray[400],
  accent: clr.primary[500],
  danger: clr.danger[500]
};
