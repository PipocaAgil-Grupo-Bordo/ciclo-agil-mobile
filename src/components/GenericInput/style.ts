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
    width: 300px;
    position: relative;
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
  `,

  Error: styled.Text`
    margin-bottom: 15px;
    color: ${ColorScheme.accent.danger};
    font-size: ${FontScheme.size.default}px;
    font-family: ${FontScheme.family.primary};
  `
};
