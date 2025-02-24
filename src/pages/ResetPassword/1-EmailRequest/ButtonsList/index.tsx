import React from "react";

import GenericButton from "@components/GenericButton";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";

import { ButtonListProps } from "../type";
import { Sc } from "./style";

function ButtonList({ onPress, isLoading }: ButtonListProps) {
  const navigation = useNavigation<NavigationType>();

  return (
    <Sc.Container>
      <GenericButton onPress={onPress} isLoading={isLoading} state="accent">
        Enviar
      </GenericButton>

      <GenericButton onPress={() => navigation.navigate("Login")} state="no-style">
        Voltar ao login
      </GenericButton>
    </Sc.Container>
  );
}

export default ButtonList;
