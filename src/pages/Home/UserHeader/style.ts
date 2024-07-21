import { ColorScheme } from "@styles/globalStyles";
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
    /* Placeholder bg color as there's no picture atm */
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
    color: ${ColorScheme.text.primary};
  `,

  SettingsWrapper: styled.View`
    flex-direction: row;
    gap: 8px;
  `
};
