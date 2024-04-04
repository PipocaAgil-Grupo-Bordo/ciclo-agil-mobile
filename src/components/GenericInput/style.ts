import styled from "styled-components/native";
import { StyledInputProps } from "./type";
import { StyledText } from "@components/TextBox/style";
import MaskInput from "react-native-mask-input";

export const Sc = {
  Container: styled.View``,

  Label: styled(StyledText)`
    margin-bottom: 12px;
  `,

  Input: styled(MaskInput)<StyledInputProps>`
    background-color: #e7ecf4;
    border-radius: 5px;
    padding: 16px;
    border: ${(props) => (props.errors && props.errors[props.name] ? "#FF0000" : "none")};
  `,

  Error: styled(StyledText)`
    color: #ff0000;
    font-size: 14px;
  `
};
