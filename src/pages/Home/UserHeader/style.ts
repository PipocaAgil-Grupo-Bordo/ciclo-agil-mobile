import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  `,

  UserWrapper: styled.View`
    flex: 1;
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

  TextContainer: styled.View`
    flex: 1;
    margin-right: 10px;
  `,

  Text: styled.Text`
    font-family: ${FontScheme.family.primaryMedium};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
    word-wrap: break-word;
    word-break: break-word;
  `,

  SettingsWrapper: styled.View`
    flex-direction: row;
    gap: 12px;
  `
};
