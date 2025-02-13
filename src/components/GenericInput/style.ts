import styled from "styled-components/native";
import { StyledInputProps } from "./type";
import MaskInput from "react-native-mask-input";
import { ColorScheme, FontScheme } from "@styles/globalStyles";

export const Sc = {
  Container: styled.View`
    margin: 0 auto;
  `,

  Label: styled.Text`
    position: absolute;
    top: -10px;
    left: 16px;
    font-size: ${FontScheme.size.default}px;
    font-family: ${FontScheme.family.primaryMedium};
    color: #49454f;
    background-color: #fafcff;
    padding: 0 4px;
    z-index: 999;
  `,

  Input: styled(MaskInput)<StyledInputProps>`
    position: relative;
    width: 300px;
    background-color: ${ColorScheme.background.secondary};
    font-family: ${FontScheme.family.primary};
    color: ${ColorScheme.text.primary};
    border-radius: 5px;
    padding: 16px;
    font-size: ${FontScheme.size.default}px;
    border: ${(props) =>
      props.errors && props.errors[props.name] ? ColorScheme.accent.danger : "none"};
  `,

  Error: styled.Text`
    color: ${ColorScheme.accent.danger};
    font-size: ${FontScheme.size.default}px;
    font-family: ${FontScheme.family.primary};
  `
};
