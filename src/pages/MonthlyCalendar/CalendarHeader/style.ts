import styled from "styled-components/native";

export const Sc = {
  Header: styled.View`
    flex-direction: row;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: #D9D9D9;
    width: 100%;
  `,

  HeaderTitle: styled.Text`
    font-family: "Montserrat";
    color: #090a0a;
  `,

  CurrentMonth: styled.Text`
    text-transform: capitalize;
  `,

  CurrentYear: styled.Text`
    color: #6c7072;
  `
};
