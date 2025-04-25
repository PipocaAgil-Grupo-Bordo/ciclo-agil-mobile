import styled from "styled-components/native";
import { FontScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";

export const Sc = {
  container: styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin-right: 10%;
    margin-top: 50%;
    margin-bottom: 10%;
  `,
  contentContainer: styled.View`
    align-items: center;
    margin-bottom: 60%;
  `,
  image: styled.Image`
    width: 130px;
    height: 139px;
    margin-bottom: 20px;
  `,
  text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
    text-align: center;
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
