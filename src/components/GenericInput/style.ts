import styled from "styled-components/native";
import { StyledInputProps } from "./type";
import MaskInput from "react-native-mask-input";
import { ColorScheme, FontScheme, NewColorScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";
import { LinearGradient } from "expo-linear-gradient";

export const Sc = {
  Container: styled.View`
    margin: 0 auto;
  `,

  // Label: styled.Text`
  //   position: absolute;
  //   top: -10px;
  //   left: 16px;
  //   font-size: ${FontScheme.size.default}px;
  //   font-family: ${FontScheme.family.primaryMedium};
  //   color: #49454f;
  //   background-color: "trasparent";
  //   padding: 0 4px;
  //   z-index: 999;
  // `,

  LabelWrapper: styled(LinearGradient).attrs({
    colors: [NewColorScheme.background.white, Palette.info[100]],
    start: { x: 0, y: 1 },
    end: { x: 0, y: 0 }
  })`
    position: absolute;
    top: -10px;
    left: 16px;
    padding: 2px 8px;
    z-index: 999;
  `,

  Label: styled.Text`
    font-size: ${FontScheme.size.small}px;
    font-family: ${FontScheme.family.primaryMedium};
    color: ${NewColorScheme.text.tertiary};
  `,

  Input: styled(MaskInput)<StyledInputProps>`
    position: relative;
    width: 300px;
    background-color: ${NewColorScheme.background.white};
    font-family: ${FontScheme.family.primary};
    color: ${ColorScheme.text.primary};
    border-radius: 5px;
    padding: 16px;
    font-size: ${FontScheme.size.medium}px;
    border: ${(props) =>
      props.errors && props.errors[props.name] ? ColorScheme.accent.danger : "1px solid #9A969A"};
  `,

  Error: styled.Text`
    color: ${ColorScheme.accent.danger};
    font-size: ${FontScheme.size.default}px;
    font-family: ${FontScheme.family.primary};
  `
};
