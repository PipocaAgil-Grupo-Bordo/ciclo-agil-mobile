import styled from "styled-components/native";
import { Palette } from "@styles/palette";
import { FontScheme } from "@styles/globalStyles";

export const Sc = {
  ModalOverlay: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
  `,

  ModalContainer: styled.View`
    width: 90%;
    background-color: white;
    border-radius: 10px;
    padding: 32px 24px;
    align-items: flex-start;
    position: relative;
  `,

  ModalTitle: styled.Text`
    font-family: ${FontScheme.family.primaryBold};
    font-size: 16px;
    line-height: 24px;
    margin-top: 24px;
    margin-bottom: 16px;
    color: ${Palette.neutralBlack[500]};
  `,

  ModalMessage: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: 16px;
    line-height: 20px;
    color: ${Palette.neutralBlack[300]};
    margin-bottom: 8px;
  `,

  CloseButton: styled.TouchableOpacity`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  `,

  CloseIcon: styled.Text`
    font-size: 18px;
    color: ${Palette.neutralBlack[500]};
  `
};
