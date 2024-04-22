import { horizontalScale, moderateScale, verticalScale } from "@utils/responsivenessHelper";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    margin: ${verticalScale(5) + "px" + " " + horizontalScale(5) + "px"};
  `,
  Wrapper: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  Photo: styled.Image`
    height: ${verticalScale(36)}px;
    width: ${horizontalScale(36)}px;
    border-radius: ${moderateScale(30)}px;
  `,
  Name: styled.Text`
    font-size: ${moderateScale(14)}px;
  `,
  Link: styled.Button`
    width: ${horizontalScale(20)} px;
    height: ${verticalScale(8)}px;
  `
};
