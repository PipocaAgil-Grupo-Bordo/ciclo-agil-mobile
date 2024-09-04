import styled from "styled-components/native";
import { verticalScale } from "@utils/responsivenessHelper";
import { ColorScheme, FontScheme } from "@styles/globalStyles";

export const Sc = {
  Container: styled.View`
    margin: ${verticalScale(5) + "px" + " "} 0px;
  `,

  Wrapper: styled.View``,

  RoleTitle: styled.Text`
    font-family: ${FontScheme.family.primaryMedium};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.accent.highlight};
    margin: ${verticalScale(5) + "px" + " "} 0px;
  `
};
