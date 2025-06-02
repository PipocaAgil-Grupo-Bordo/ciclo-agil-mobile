import styled from "styled-components/native";
import { NewColorScheme } from "@styles/globalStyles";
import { Palette } from "@styles/palette";

export const Sc = {
  container: styled.View`
    flex: 1;
  `,
  contentContainer: styled.View`
    flex: 1;
  `,
  paginationContainer: styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
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
