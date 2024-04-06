import React from "react";
import { Sc } from "./style";

const Header: React.FC = () => {
  return (
    <Sc.Container>
      <Sc.Title>Registre-se</Sc.Title>
      <Sc.SubTitle>Para continuar digite seu nome, data de nascimento, email e senha.</Sc.SubTitle>
    </Sc.Container>
  );
};

export default Header;
