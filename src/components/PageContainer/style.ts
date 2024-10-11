
import styled from 'styled-components/native';
import { ColorScheme } from '../../styles/globalStyles'; 


export const Container = styled.View<{ backgroundColor?: string; padding?: string }>`
  display: flex;
  flex: 1;
  background-color: ${(props) => props.backgroundColor || ColorScheme.background.primary}; 
  padding: ${(props) => props.padding || '42px 24px'}; 
      min-height: 100vh 
`; 
