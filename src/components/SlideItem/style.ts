import styled from "styled-components/native";
import { FontScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";

export const Sc = {
  container: styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin-right: 10%;
    margin-top: 45%;
    margin-bottom: 32px;
  `,
  contentContainer: styled.View`
    align-items: center;
    margin-bottom: 55%;
  `,
  text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
    line-height: 24px;
    text-align: center;
    margin-top: 24px;
    color: ${Palette.neutralBlack[400]};
  `,
  buttonsContainer: styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  `,
  buttonContainer: styled.View`
    width: 100px;
  `
};
