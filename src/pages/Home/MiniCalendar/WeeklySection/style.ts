import { ColorScheme, FontScheme, NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 16px 16px 8px 16px;
    border-radius: 16px;
  `,

  WeekWrapper: styled.View`
    align-items: center;
    gap: 8px;
  `,

  Week: styled.Text`
    padding: 8px;
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.small}px;
    color: ${ColorScheme.text.secondary};
  `,

  DayWrapper: styled.View<{
    hasBorder: boolean;
    isSelected?: boolean;
    isFirstMenstrualDay?: boolean;
  }>`
    background-color: ${({ hasBorder, isSelected }) =>
      isSelected ? `#F6ABEC` : hasBorder ? `${NewColorScheme.foreground.secondary};` : ``};
    border-style: solid;
    text-align: center;
    width: 30px;
    height: 41px;
    border-width: ${({ isSelected }) => (!isSelected ? `0px` : `1px`)};
    border-color: ${({ isSelected }) => (!isSelected ? `transparent` : `#F067E1`)};
    border-radius: 99px;
    align-items: center;
    justify-content: center;
  `,

  Day: styled.Text<{ hasBorder: boolean; isSelected?: boolean; isFirstMenstrualDay?: boolean }>`
    text-align: center;
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.small}px;
    color: ${({ hasBorder, isSelected }) =>
      isSelected
        ? `${NewColorScheme.text.white}`
        : hasBorder
        ? `${NewColorScheme.text.white}`
        : `${ColorScheme.text.primary}`};
  `
};
