import { NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    background-color: ${NewColorScheme.background.primary};
    justify-content: space-between;
    padding: 32px 16px 16px 16px;
    flex: 1;
  `,

  TopWrapper: styled.View`
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  `,

  BottomWrapper: styled.View`
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  `
};
