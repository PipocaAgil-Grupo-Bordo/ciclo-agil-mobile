import React from "react";

import TopHeader from "@components/Header";

import { Sc } from "./style";

function Header() {
  return (
    <Sc.Container>
      <Sc.Wrapper>
        <TopHeader title="Registre-se" />
      </Sc.Wrapper>

      <Sc.SubTitle>Para continuar digite seu nome, data de nascimento, email e senha.</Sc.SubTitle>
    </Sc.Container>
  );
}

export default Header;
