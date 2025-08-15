import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.ScrollView`
    background-color: ${ColorScheme.background.primary};
    gap: 32px;
  `,

  Wrapper: styled.View`
    flex: 1;
    padding: 60px 17px 17px;
    justify-content: space-between;
  `,

  BackIcon: styled.TouchableOpacity`
    position: absolute;
    top: 40px;
    left: 20px;
  `
};
