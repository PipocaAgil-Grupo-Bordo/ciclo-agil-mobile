import { FontScheme, ColorScheme } from "@styles/globalStyles";
import styled, { css } from "styled-components/native";

import { DropdownMenuStyle, OptionStyle } from "./type";
import { Palette } from "@styles/palette";

const dropdownOptions = styled.Text`
  font-family: ${FontScheme.family.primarySemiBold};
  color: ${Palette.neutralBlack[400]};
  font-size: ${FontScheme.size.default}px;
  background-color: ${Palette.neutralWhite[100]};
`;

export const Sc = {
  Container: styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
  `,

  Label: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: ${FontScheme.size.medium}px;
    font-color: ${ColorScheme.text.primary};
  `,

  DropdownWrapper: styled.View`
    position: relative;
    z-index: 100;
  `,

  DropdownMenu: styled.Pressable<DropdownMenuStyle>`
    background-color: ${Palette.neutralWhite[100]};
    width: ${({ isOpen }) => isOpen && "150px"};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1.5px solid ${Palette.primary[200]};
    border-bottom-width: ${({ isOpen }) => (isOpen ? "0" : "2px")};
    border-radius: 10px;
    border-bottom-left-radius: ${({ isOpen }) => (isOpen ? "0" : "10px")};
    border-bottom-right-radius: ${({ isOpen }) => (isOpen ? "0" : "10px")};
    padding: 10px;
    gap: 8px;
  `,

  SelectedOption: styled(dropdownOptions)``,

  DropdownOptions: styled.ScrollView`
    border: 1.5px solid ${Palette.primary[200]};
    width: 100%;
    position: absolute;
    top: 100%;
    border-radius: 0 0 10px 10px;
  `,

  OptionButton: styled.TouchableOpacity``,

  Option: styled(dropdownOptions)<OptionStyle>`
    padding: 10px 0;
    width: 100%;
    border: 0 solid ${Palette.neutralWhite[500]};
    text-align: center;
    /* Prevent last item from having a thicker width */
    ${({ isLast }) =>
      !isLast &&
      css`
        border-left-width: 2px;
        border-right-width: 2px;
        border-bottom-width: 2px;
      `}
    ${({ isLast }) =>
      isLast &&
      css`
        border-radius: 0 0 10px 10px;
      `}
  `
};
