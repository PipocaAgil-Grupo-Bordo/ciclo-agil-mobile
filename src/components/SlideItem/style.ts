import styled from "styled-components/native";
import { FontScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";

export const Sc = {
  container: styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    margin-right: 10%;
  `,
  contentContainer: styled.View`
    align-items: center;
  `,
  image: styled.Image`
    width: 130px;
    height: 139px;
    margin-bottom: 20px;
  `,
  text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.medium};
    text-align: center;
    margin-bottom: 30px;
    color: ${Palette.neutralBlack[400]};
  `,
  buttonsContainer: styled.View`
    flex-direction: row;
    gap: 15px;
    margin-bottom: 20px;
  `,
  buttonContainer: styled.View`
    flex: 1;
  `
};
