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
    flex: 1; /** Adicionei flex: 1 para garantir que o contêiner do usuário ocupe o espaço disponível e permita que o texto quebre a linha.
    */
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
  `,

  Text: styled.Text`
    font-family: ${FontScheme.family.primaryMedium};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
    /**Adicionei word-wrap: break-word e word-break: break-word para garantir que o texto quebre a linha corretamente. */
    word-wrap: break-word;
    word-break: break-word;
  `,

  SettingsWrapper: styled.View`
    flex-direction: row;
    gap: 8px;
  `
};
