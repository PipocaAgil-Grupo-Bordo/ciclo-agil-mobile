import styled from "styled-components/native";
import { StyledInputProps } from "./type";
import MaskInput from "react-native-mask-input";
import { Palette } from "@styles/palette";
import { ColorScheme, NewColorScheme, FontScheme } from "@styles/globalStyles";

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
    top: ${(props) => (props.isFocused ? 7.5 : 10.5)}px;
    background-color: ${Palette.neutralWhite[50]};
    height: ${(FontScheme.size.default + 3) / 2}px;
  `,

  Label: styled.Text`
    top: -8px;
    font-size: ${FontScheme.size.default}px;
    font-family: ${FontScheme.family.primaryMedium};
    color: #49454f;
    padding: 0 4px;
  `,

  InputWrapper: styled.View<InputWrapperProps>`
    position: relative;
    background-color: ${(props) => (props.isFocused ? "#B4D2F8" : "transparent")};
    border-radius: 10px;
    padding: 3px;
  `,

  Input: styled(MaskInput)<StyledInputProps>`
    background-color: ${Palette.neutralWhite[50]};
    font-family: ${FontScheme.family.primary};
    color: ${NewColorScheme.text.primary};
    padding: 16px;
    font-size: ${FontScheme.size.default}px;
    border: ${(props) =>
      props.errors && props.errors[props.name]
        ? `1px solid ${ColorScheme.accent.danger}`
        : props.isFocused
          ? "1px solid #194ab4"
          : `1px solid ${Palette.neutralGray[500]}`};
    z-index: 0;
    border-radius: 8px;
  `,

  PasswordButtonContainer: styled.Pressable`
    position: absolute;
    top: 4px;
    right: 4px;
    padding: 17.5px 12px;
    background-color: ${Palette.neutralWhite[50]};
    border-radius: 7px;
  `,

  Error: styled.Text`
    color: ${ColorScheme.accent.danger};
    font-size: ${FontScheme.size.default}px;
    font-family: ${FontScheme.family.primary};
  `
};
