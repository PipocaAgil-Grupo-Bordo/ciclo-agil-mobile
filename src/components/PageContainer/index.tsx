import React from 'react';
import { Container } from './style'; 

interface PageContainerProps {
  backgroundColor?: string; 
  padding?: string; 
  children: React.ReactNode; 
}

const PageContainer: React.FC<PageContainerProps> = ({ backgroundColor, padding, children }) => {
  return (
    <Container backgroundColor={backgroundColor} padding={padding}>
      {children}
    </Container>
  );
};

export default PageContainer;
