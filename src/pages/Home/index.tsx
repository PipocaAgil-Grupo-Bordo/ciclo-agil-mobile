import React from "react";
import { StyledHomeContainer } from "./style";
import TextBox from "@components/TextBox";

const Home: React.FC = () => {
  return (
    <StyledHomeContainer>
      <TextBox>Tela de ínicio</TextBox>
    </StyledHomeContainer>
  );
};

export default Home;
