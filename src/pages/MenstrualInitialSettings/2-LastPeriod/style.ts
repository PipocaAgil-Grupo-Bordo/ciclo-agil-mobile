import { NewColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    background-color: ${NewColorScheme.background.primary};
    justify-content: space-between;
    padding: 32px 24px 24px 24px;
  `,

  TopWrapper: styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
  `
};
