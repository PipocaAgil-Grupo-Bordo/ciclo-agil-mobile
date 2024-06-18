import React from "react";
import { Sc } from "./style";
import MainHeader from "@components/Header";

function Header() {
  return (
    <Sc.Container>
      <Sc.Wrapper>
        <MainHeader title="Registre-se" />
      </Sc.Wrapper>

      <Sc.SubTitle>Para continuar digite seu nome, data de nascimento, email e senha.</Sc.SubTitle>
    </Sc.Container>
  );
}

export default Header;
