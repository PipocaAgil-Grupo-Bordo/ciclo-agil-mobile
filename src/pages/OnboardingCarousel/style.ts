import styled from "styled-components/native";

export const Sc = {
  paginationContainer: styled.View`
    flex-direction: row;
    justify-content: center;
    position: absolute;
    bottom: 30px;
  `,
  paginationDot: styled.View`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-left: 6px;
    margin-right: 6px;
  `,
  activeDot: styled.View`
    background-color: #8a2be2;
  `,
  inactiveDot: styled.View`
    background-color: #d3d3d3;
  `
};
