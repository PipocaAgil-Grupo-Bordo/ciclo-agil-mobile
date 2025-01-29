import styled from "styled-components/native";
import { FontScheme, NewColorScheme } from "../../styles/globalStyles";

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  background-color: ${NewColorScheme.background.primary};
  padding-top: 36px;
  padding-right: ${FontScheme.size.medium}px;
  padding-bottom: ${FontScheme.size.small}px;
  padding-left: ${FontScheme.size.medium}px;
  min-height: 100vh;
`;
