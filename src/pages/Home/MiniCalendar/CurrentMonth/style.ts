import { ColorScheme, FontScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    margin-top: 16px;
    padding-bottom: 12px;
    border-bottom-width: 1px;
    border-color: ${Palette.neutralGray[200]};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    overflow: hidden;
  `,

  CurrentMonth: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
  `,

  IconWrapper: styled.View``
};
