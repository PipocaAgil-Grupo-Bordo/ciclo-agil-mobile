import styled from "styled-components/native";
import { StyledInputProps } from "./type";
import { StyledText } from "@components/TextBox/style";
import MaskInput from "react-native-mask-input";
import { ColorScheme } from "@styles/globalStyles";

export const Sc = {
  Container: styled.View``,

  Label: styled(StyledText)`
    margin-bottom: 12px;
  `,

  Input: styled(MaskInput)<StyledInputProps>`
    background-color: ${ColorScheme.background.secondary};
    border-radius: 5px;
    padding: 16px;
    border: ${(props) =>
      props.errors && props.errors[props.name] ? ColorScheme.accent.danger : "none"};
  `,

  Error: styled(StyledText)`
    color: ${ColorScheme.accent.danger};
    font-size: 14px;
  `
};
