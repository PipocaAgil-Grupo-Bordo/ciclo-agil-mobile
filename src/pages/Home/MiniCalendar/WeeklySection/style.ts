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

  DayWrapper: styled.View<{ hasBorder: boolean }>`
    background-color: ${({ hasBorder }) =>
      hasBorder ? `${NewColorScheme.foreground.secondary};` : ``};
    border-style: solid;
    text-align: center;
    border-color: ${ColorScheme.accent.highlight};
    border-radius: 99px;
    padding: 12px 9px 12px 9px;
    align-items: center;
    justify-content: center;
  `,

  Day: styled.Text<{ hasBorder: boolean }>`
    text-align: center;
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.small}px;
    color: ${({ hasBorder }) =>
      hasBorder ? `${NewColorScheme.text.white}` : `${ColorScheme.text.primary}`};
  `
};
