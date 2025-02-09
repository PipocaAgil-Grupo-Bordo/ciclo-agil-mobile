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
  `,

  // Label: styled.Text<LabelProps>`
  //   position: absolute;
  //   top: 16px;
  //   left: 16px;
  //   font-size: ${FontScheme.size.default}px;
  //   font-family: ${FontScheme.family.primaryMedium};
  //   color: ${ColorScheme.text.primary};
  //   opacity: ${(props) => (props.isFocused ? 0 : 1)};
  //   transform: translateY(${(props) => (props.isFocused ? "-12px" : "0px")});
  //   transition: all 0.2s ease-in-out;
  // `,
  Label: styled.Text<LabelProps>`
    position: absolute;
    /* top: ${({ isFocused }) => (isFocused ? "6px" : "16px")}; */
    top: -10px;
    left: 16px;
    font-size: ${FontScheme.size.default}px;
    font-family: ${FontScheme.family.primaryMedium};
    color: #49454f;
    background-color: #fafcff;
    /* opacity: ${({ isFocused }) => (isFocused ? 1 : 0.5)}; */
    /* transform: translateY(${({ isFocused }) => (isFocused ? "-16px" : "-35px")});
    transition: all 0.2s ease-in-out; */
    padding: 0 4px; /* Pequeno padding para evitar corte da label */
    z-index: 999;
  `,

  Input: styled(MaskInput)<StyledInputProps>`
    position: relative;
    background-color: #fffefe;
    font-family: ${FontScheme.family.primary};
    color: ${ColorScheme.text.primary};
    border-radius: 5px;
    padding: 16px;
    font-size: ${FontScheme.size.default}px;
    /* outline: ${({ isFocused }) => (isFocused ? "solid blue" : "none")}; */
    border: ${(props) =>
      props.errors && props.errors[props.name]
        ? `0.5px solid ${ColorScheme.accent.danger}`
        : "#7e797e"};
    z-index: 0;
  `,

  Error: styled.Text`
    color: ${ColorScheme.accent.danger};
    font-size: ${FontScheme.size.default}px;
    font-family: ${FontScheme.family.primary};
  `
};
