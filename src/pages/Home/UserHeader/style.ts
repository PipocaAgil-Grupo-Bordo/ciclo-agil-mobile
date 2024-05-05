import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  UserWrapper: styled.View`
    flex-direction: row;
    align-items: center;
    gap: 12px;
  `,

  ImageContainer: styled.View`
    background-color: #cfcfcf;
    width: 40px;
    height: 40px;
    border-radius: 55px;
    overflow: hidden;
  `,

  Image: styled.ImageBackground`
    width: 40px;
    height: 40px;
  `,

  Text: styled.Text`
    font-family: "MontserratBold";
  `,

  SettingsWrapper: styled.View`
    flex-direction: row;
    gap: 8px;
  `
};
