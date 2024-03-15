import React from "react";
import { InstructionText, TopicName } from "./style";

import { Container } from "./style";

const Header: React.FC = () => {
  return (
    <Container>
      <TopicName>Registre-se</TopicName>
      <InstructionText>
        Para continuar digite seu nome, data de nascimento, email e senha.
      </InstructionText>
    </Container>
  );
};

export default Header;
