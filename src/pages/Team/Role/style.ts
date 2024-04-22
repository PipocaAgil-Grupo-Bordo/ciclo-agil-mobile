import styled from "styled-components/native";
import { horizontalScale, moderateScale, verticalScale } from "@utils/responsivenessHelper";

export const Sc = {
  Container: styled.View`
  margin: ${verticalScale(5)+"px"+" "} 0px;
  `,
  Wrapper: styled.View``,
  RoleTitle: styled.Text`
    font-family: "Montserrat";
    color: #9a4ccf;
    margin: ${verticalScale(5)+"px"+" "} 0px;
  `
};
