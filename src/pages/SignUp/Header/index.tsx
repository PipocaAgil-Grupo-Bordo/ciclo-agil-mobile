import React from "react";
import { StyledInstructionText, StyledTopicName } from "./style";

import { Container } from "./style";

const Header: React.FC = () => {
  return (
    <Container>
      <StyledTopicName>Registre-se</StyledTopicName>
      <StyledInstructionText>
        Para continuar digite seu nome, data de nascimento, email e senha.
      </StyledInstructionText>
    </Container>
  );
};

export default Header;
