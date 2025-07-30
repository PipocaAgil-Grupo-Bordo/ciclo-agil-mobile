import { NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    background-color: ${NewColorScheme.background.primary};
    justify-content: space-between;
    flex: 1;
    padding: 32px 24px 24px 24px;
  `,

  TopWrapper: styled.View`
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  `,

  BottomWrapper: styled.View`
    flex-direction: column;
    justify-content: center;
    gap: 8px;
  `
};
