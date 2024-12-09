import styled from "styled-components/native";

export const Sc = {
  Header: styled.View`
    flex-direction: row;
    justify-content: center;
    width: 100%;
  `,

  HeaderTitle: styled.Text`
    font-family: "Montserrat";
    color: #090a0a;
    font-size: 16px;
  `,

  CurrentMonth: styled.Text`
    text-transform: capitalize;
  `,

  CurrentYear: styled.Text`
    color: #6c7072;
  `
};