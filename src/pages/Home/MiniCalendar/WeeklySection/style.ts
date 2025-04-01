import { ColorScheme, FontScheme, NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

const getBackgroundColor = ({
  hasBorder,
  isSelected
}: {
  hasBorder: boolean;
  isSelected?: boolean;
}) => {
  if (isSelected) return "#FCE5F8";
  if (hasBorder) return NewColorScheme.foreground.secondary;
  return "transparent";
};

const getBorderColor = ({ isSelected }: { isSelected?: boolean }) =>
  isSelected ? "#F067E1" : "transparent";

const getBorderStyle = ({
  isFirstMenstrualDay,
  isSelected
}: {
  isFirstMenstrualDay?: boolean;
  isSelected?: boolean;
}) => (isSelected && !isFirstMenstrualDay ? "dashed" : "solid");

const getTextColor = ({ hasBorder, isSelected }: { hasBorder: boolean; isSelected?: boolean }) =>
  hasBorder && !isSelected ? NewColorScheme.text.white : ColorScheme.text.primary;

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
    background-color: ${getBackgroundColor};
    border-width: ${({ isSelected }) => (isSelected ? "1px" : "0px")};
    border-color: ${getBorderColor};
    border-style: ${getBorderStyle};
    width: 30px;
    height: 41px;
    border-radius: 99px;
    align-items: center;
    justify-content: center;
  `,

  Day: styled.Text<{ hasBorder: boolean; isSelected?: boolean; isFirstMenstrualDay?: boolean }>`
    font-family: ${FontScheme.family.primarySemiBold};
    font-size: ${FontScheme.size.small}px;
    color: ${getTextColor};
  `
};
