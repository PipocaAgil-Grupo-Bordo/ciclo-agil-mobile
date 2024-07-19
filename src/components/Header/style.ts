import { ColorScheme } from "@styles/globalStyles";
import styled from "styled-components/native";

export const Sc = {
  Container: styled.View`
    position: absolute;
    width: 100%;
  `,

  BackButton: styled.TouchableOpacity`
    position: absolute;
    margin-top: 4px;
    left: -8px;
  `,

  Title: styled.Text`
    font-size: 22px;
    color: ${ColorScheme.textPrimary};
    text-align: center;
    font-family: "Lora";
    margin-left: 14px;
  `
};
