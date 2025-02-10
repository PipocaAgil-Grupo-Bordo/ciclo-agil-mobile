import styled from "styled-components/native";
import { StyledInputProps } from "./type";
import MaskInput from "react-native-mask-input";
import { ColorScheme, FontScheme } from "@styles/globalStyles";

interface LabelProps {
  isFocused?: boolean; // Add isFocused prop with optional boolean type
}

export const Sc = {
  Container: styled.View`
    position: relative;
    margin-top: ${FontScheme.size.default / 2}px;
  `,

  LabelContainer: styled.View`
    position: absolute;
    top: -11px;
    left: 16px;
    height: ${FontScheme.size.default + 6}px;
    z-index: 999;
  `,

  LabelBottomContainer: styled.View`
    top: 11px;
    background-color: #fffefe;
    height: ${(FontScheme.size.default + 6)/2}px;
    z-index: 999;
  `,

  Label: styled.Text<LabelProps>`
    top: -11px;
    font-size: ${FontScheme.size.default}px;
    font-family: ${FontScheme.family.primaryMedium};
    color: #49454f;
    padding: 0 4px; /* Pequeno padding para evitar corte da label */
  `,

  Input: styled(MaskInput)<StyledInputProps>`
    background-color: #fffefe;
    font-family: ${FontScheme.family.primary};
    color: ${ColorScheme.text.primary};
    border-radius: 5px;
    padding: 16px;
    font-size: ${FontScheme.size.default}px;
    border: ${(props) =>
      props.errors && props.errors[props.name]
        ? `1px solid ${ColorScheme.accent.danger}`
        : props.isFocused
        ? "#194ab4"
        : "#7e797e"};
    z-index: 0;
    border-radius: 4px;
  `,

  Error: styled.Text`
    color: ${ColorScheme.accent.danger};
    font-size: ${FontScheme.size.default}px;
    font-family: ${FontScheme.family.primary};
  `
};
