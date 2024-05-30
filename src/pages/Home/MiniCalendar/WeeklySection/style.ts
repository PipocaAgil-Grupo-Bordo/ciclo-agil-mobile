import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 0 16px;
    margin-top: 16px;
  `,

  WeekWrapper: styled.View`
    align-items: center;
    gap: 12px;
  `,

  Week: styled.Text`
    color: #6c7072;
    font-size: 14px;
  `,

  DayWrapper: styled.View<{ hasBorder: boolean }>`
    border-width: ${({ hasBorder }) => (hasBorder ? "1px" : "0")};
    border-style: solid;
    border-color: #64278d;
    border-radius: 99px;

    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
  `,

  Day: styled.Text`
    font-size: 14px;
    font-weight: 600;
  `
};