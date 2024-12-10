import { ColorScheme, FontScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 16px 4px 16px;
    margin-top: 8px;
    background-color: white;
    border-radius: 16px;
  `,

  WeekWrapper: styled.View`
    align-items: center;
    gap: 25px;
  `,

  Week: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.small}px;
    color: ${ColorScheme.text.secondary};
  `,

  DayWrapper: styled.View<{ hasBorder: boolean }>`
    border-width: ${({ hasBorder }) => (hasBorder ? "1px" : "0")};
    border-style: solid;
    border-color: ${ColorScheme.accent.highlight};
    border-radius: 99px;

    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
  `,

  Day: styled.Text`
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.default}px;
    color: ${ColorScheme.text.primary};
  `
};
