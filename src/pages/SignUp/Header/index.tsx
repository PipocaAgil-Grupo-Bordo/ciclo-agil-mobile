import React from "react";

import TopHeader from "@components/Header";
import { Text } from "react-native";

import { Sc } from "./style";

function Header() {
  return (
    <Sc.Container>
      <Sc.Wrapper>
        <TopHeader title="Registre-se" />
      </Sc.Wrapper>

      <Sc.SubTitle>
        <Text>Para continuar digite seu nome, data de nascimento, email e senha.</Text>
      </Sc.SubTitle>
    </Sc.Container>
  );
}

export default Header;
