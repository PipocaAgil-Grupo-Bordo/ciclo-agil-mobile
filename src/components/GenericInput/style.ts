import styled from "styled-components/native";
import { StyledInputProps } from "./type";
import MaskInput from "react-native-mask-input";
import { ColorScheme, FontScheme } from "@styles/globalStyles";

interface InputWrapperProps {
  isFocused?: boolean;
}

export const Sc = {
  Container: styled.View`
    position: relative;
    margin-top: ${FontScheme.size.default / 2}px;
  `,

  LabelContainer: styled.View`
    position: absolute;
    top: -8px;
    left: 16px;
    height: ${FontScheme.size.default + 6}px;
    z-index: 999;
  `,

  LabelBottomContainer: styled.View<InputWrapperProps>`
    top: ${props => props.isFocused ? 7.5 : 10.5}px;
    background-color: #ffffff;
    height: ${(FontScheme.size.default + 3) / 2}px;
    z-index: 999;
  `,

  Label: styled.Text`
    top: -8px;
    font-size: ${FontScheme.size.default}px;
    font-family: ${FontScheme.family.primaryMedium};
    color: #49454f;
    padding: 0 4px;
  `,

  InputWrapper: styled.View<InputWrapperProps>`
    background-color: ${props => props.isFocused ? '#B4D2F8' : 'transparent'};
    border-radius: 10px;
    padding: 3px;
  `,

  Input: styled(MaskInput)<StyledInputProps>`
    background-color: #fffefe;
    font-family: ${FontScheme.family.primary};
    color: ${ColorScheme.text.primary};
    padding: 16px;
    font-size: ${FontScheme.size.default}px;
    border: ${(props) =>
      props.errors && props.errors[props.name]
        ? `1px solid ${ColorScheme.accent.danger}`
        : props.isFocused
        ? "1px solid #194ab4"
        : "1px solid #7e797e"};
    z-index: 0;
    border-radius: 8px;
  `,

  Error: styled.Text`
    color: ${ColorScheme.accent.danger};
    font-size: ${FontScheme.size.default}px;
    font-family: ${FontScheme.family.primary};
  `
};