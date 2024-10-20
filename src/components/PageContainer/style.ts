import styled from "styled-components/native";
import { ColorScheme, FontScheme } from "../../styles/globalStyles";

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${ColorScheme.background.primary};
  padding: ${FontScheme.size.heading}px;
  flex-grow: 1;
`;
