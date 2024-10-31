import styled from "styled-components/native";
import { ColorScheme, FontScheme } from "../../styles/globalStyles";

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: ${ColorScheme.background.primary};
  padding-top: ${FontScheme.size.heading}px;
  padding-right: ${FontScheme.size.small}px;
  padding-bottom: ${FontScheme.size.heading}px;
  padding-left: ${FontScheme.size.small}px;
  min-height: 100vh;
`;
