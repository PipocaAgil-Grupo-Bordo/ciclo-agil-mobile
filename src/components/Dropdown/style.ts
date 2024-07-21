import styled, { css } from "styled-components/native";
import { DropdownMenuStyle, OptionStyle } from "./type";
import { ColorScheme, FontScheme } from "@styles/globalStyles";

export const Sc = {
  Container: styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
  `,

  Label: styled.Text`
    font-size: ${FontScheme.size.medium}px;
  `,

  DropdownWrapper: styled.View`
    position: relative;
    z-index: 100;
  `,

  DropdownMenu: styled.Pressable<DropdownMenuStyle>`
    width: ${({ isOpen }) => isOpen && "150px"};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 2px solid ${ColorScheme.border.primary};
    border-bottom-width: ${({ isOpen }) => (isOpen ? "0" : "2px")};
    border-radius: 10px;
    border-bottom-left-radius: ${({ isOpen }) => (isOpen ? "0" : "10px")};
    border-bottom-right-radius: ${({ isOpen }) => (isOpen ? "0" : "10px")};
    padding: 6px 12px;
    gap: 8px;
  `,

  SelectedOption: styled.Text`
    font-family: "MontserratBold";
    background-color: ${ColorScheme.background.primary};
    font-size: ${FontScheme.size.medium}px;
  `,

  DropdownOptions: styled.ScrollView`
    border: 2px solid ${ColorScheme.border.primary};
    width: 100%;
    position: absolute;
    top: 100%;
  `,

  OptionButton: styled.TouchableOpacity``,

  Option: styled.Text<OptionStyle>``
};

Sc.Option = styled(Sc.SelectedOption)`
  padding: 4px 12px;
  width: 100%;
  border: 0 solid ${ColorScheme.border.primary};
  /* Prevent last item from having a thicker width */
  ${({ isLast }) =>
    !isLast &&
    css`
      border-bottom-width: 2px;
    `}
`;
