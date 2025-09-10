import { ColorScheme, FontScheme, NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    position: absolute;
    width: 100%;
    margin-top: 10px 0 10px;
  `,

  BackButton: styled.TouchableOpacity`
    position: absolute;
    margin-top: 4px;
    left: 5px;
  `,

  Option: styled.View`
    padding: 8px 24px;
    background-color: #b2acb7;
    border-radius: ${FontScheme.size.heading}px;
    width: 79px;
    height: 28px;
  `,

  SelectedOption: styled.View`
    padding: 8px 24px;
    background-color: ${ColorScheme.background.white};
    border-radius: ${FontScheme.size.heading}px;
    width: 79px;
    height: 28px;
  `,

  OptionsContainer: styled.View`
    flex-direction: row;
    justify-content: center;
    background-color: #b2acb7;
    border-radius: ${FontScheme.size.heading}px;
    padding: 2px;
  `,

  Text: styled.Text`
    font-size: ${FontScheme.size.small}px;
    color: ${ColorScheme.background.white};
    font-family: ${FontScheme.family.primaryBold};
    line-height: ${FontScheme.size.medium}px;
    text-align: center;
  `,

  SelectedText: styled.Text`
    font-size: ${FontScheme.size.small}px;
    color: ${NewColorScheme.text.gray};
    font-family: ${FontScheme.family.primaryBold};
    line-height: ${FontScheme.size.medium}px;
    text-align: center;
  `
};
