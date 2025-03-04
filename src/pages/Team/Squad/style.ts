import { verticalScale } from "@utils/responsivenessHelper";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View``,

  Wrapper: styled.View`
    height: ${verticalScale(500) + "px"};
    flex-wrap: wrap;
  `
};
