import { ColorScheme, FontScheme, NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

interface CheckboxProps {
  isChecked: boolean;
}

export const Sc = {
  Container: styled.View`
    margin-bottom: 15px;
    padding-inline: 15px;
  `,

  Row: styled.View`
    flex-direction: row;
    align-items: center;
  `,

  CheckboxContainer: styled.View<CheckboxProps>`
    width: 24px;
    height: 24px;
    border-radius: 4px;
    border-width: 2px;
    border-color: ${(props) => (props.isChecked ? "transparent" : "#93999e")};
    background-color: ${(props) => (props.isChecked ? "#29B126" : NewColorScheme.text.white)};
    justify-content: center;
    align-items: center;
    margin-right: 10px;
  `,

  TextContainer: styled.View`
    flex: 1;
  `,

  Text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
  `,

  Hyperlink: styled.Text`
    color: ${ColorScheme.accent.highlight};
  `
};
