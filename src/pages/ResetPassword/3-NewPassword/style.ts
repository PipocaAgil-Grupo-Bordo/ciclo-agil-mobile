import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.ScrollView`
    background-color: ${ColorScheme.background.primary};
  `,

  Wrapper: styled.View`
    flex: 1;
    padding: 46px 24px 24px;
    justify-content: space-between;
  `,

  HeaderWrapper: styled.View``
};
