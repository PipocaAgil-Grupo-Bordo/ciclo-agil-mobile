import { horizontalScale } from "@utils/responsivenessHelper";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    gap: 8px;
    justify-content: center;
    width: 90%;
  `,
  Title: styled.Text`
    font-family: "MontserratBold";
    font-size: 18px;
  `,
  OverviewCard: styled.View`
    flex-direction: row;
    align-items: center;
    gap: 16px;
    margin: 0px 20px;
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
