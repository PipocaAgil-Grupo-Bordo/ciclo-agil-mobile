import styled from "styled-components/native";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

export const Sc = {
  Container: styled.ImageBackground`
    flex: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 0;
  `,

  Image: styled.ImageBackground`
    flex: 1;
    width: ${screenWidth}px;
    height: 188px;
  `
};
