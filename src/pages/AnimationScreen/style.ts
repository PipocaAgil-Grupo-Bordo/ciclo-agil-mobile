import styled from "styled-components/native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const Sc = {
  Container: styled.View`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
  `,

  Lottie: styled.View`
    position: absolute;
    width: ${screenWidth}px;
    height: ${screenHeight}px;
  `
};
