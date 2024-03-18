import React from "react";
import { StyledInstructionText, StyledTopicName } from "./style";

import { StyledContainer } from "./style";

const Header: React.FC = () => {
  return (
    <StyledContainer>
      <StyledTopicName>Registre-se</StyledTopicName>
      <StyledInstructionText>
        Para continuar digite seu nome, data de nascimento, email e senha.
      </StyledInstructionText>
    </StyledContainer>
  );
};

export default Header;
