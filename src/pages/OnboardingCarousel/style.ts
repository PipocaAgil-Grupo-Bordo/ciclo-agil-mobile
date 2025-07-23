import styled from "styled-components/native";
import { NewColorScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";

export const Sc = {
  mainContainer: styled.View`
    display: flex;
    align-items: center;
    flex: 1;
    background-color: ${NewColorScheme.background.primary};
    padding: 8px;
    min-height: 100vh;
  `,
  container: styled.View`
    flex: 1;
    padding-bottom: 32px;
  `,
  contentContainer: styled.View``,
  paginationContainer: styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    width: 100%;
  `,
  paginationDot: styled.View<{ active?: boolean }>`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    margin-left: 6px;
    margin-right: 6px;
    background-color: ${({ active }) =>
      active ? NewColorScheme.accent.highlight : Palette.neutralGray[200]};
  `
};
