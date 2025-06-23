import styled from "styled-components/native";
import { FontScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";

export const Sc = {
  container: styled.View`
    flex: 1;
    justify-content: space-between;
    margin-bottom: 32px;
    margin-top: 180px;
  `,
  contentContainer: styled.View`
    height: 276px;
    padding: 8px 20px 8px 4px;
    flex-direction: column;
    align-items: center;
    align-content: center;
    gap: 24px;
  `,
  text: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
    line-height: 24px;
    text-align: center;
    color: ${Palette.neutralBlack[400]};
  `,
  buttonsContainer: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-right: 24px;
    padding-left: 8px;
  `,
  buttonContainer: styled.View`
    width: 100px;
  `
};
