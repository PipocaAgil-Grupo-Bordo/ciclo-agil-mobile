import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    gap: 20px;
    justify-content: center;
  `,
  Title: styled.Text`
    font-family: "MontserratBold";
    font-size: 18px;
  `,
  OverviewCard: styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
    padding: 16px;
    background-color: white;
    border-radius: 12px;
  `,
  TextContainer: styled.View``,
  Icon: styled.Image``,
  MainText: styled.Text`
    font-family: "Montserrat";
    font-size: 16px;
  `,
  SecondText: styled.Text`
    font-family: "Montserrat";
    color: #72777a;
  `
};
