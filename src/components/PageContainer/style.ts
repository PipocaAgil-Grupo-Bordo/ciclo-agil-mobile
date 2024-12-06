import styled from "styled-components/native";
import { ColorScheme, FontScheme } from "../../styles/globalStyles";

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${ColorScheme.background.primary};
  padding-top: 36px;
  padding-right: ${FontScheme.size.heading}px;
  padding-bottom: ${FontScheme.size.small}px;
  padding-left: ${FontScheme.size.heading}px;
  min-height: 100vh;
`;