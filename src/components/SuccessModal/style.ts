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
    padding: 24px 24px;
    align-items: center;
    gap: 20px;
  `,

  ModalMessage: styled.Text`
    font-family: ${FontScheme.family.primary};
    font-size: 24px;
    line-height: 28px;
    color: ${Palette.neutralBlack[300]};
    margin-bottom: 8px;
    text-align: center;
  `,

  ButonContainer: styled.View`
    width: 100px;
    align-self: flex-end;
  `
};
