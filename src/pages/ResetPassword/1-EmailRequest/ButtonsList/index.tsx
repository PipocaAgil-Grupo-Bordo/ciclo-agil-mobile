import React from "react";

import GenericButton from "@components/GenericButton";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";
import { Text } from "react-native";

import { ButtonListProps } from "../type";
import { Sc } from "./style";

function ButtonList({ onPress, isLoading }: ButtonListProps) {
  const navigation = useNavigation<NavigationType>();

  return (
    <Sc.Container>
      <GenericButton onPress={onPress} isLoading={isLoading} state="accent">
        <Text>Enviar</Text>
      </GenericButton>

      <GenericButton onPress={() => navigation.navigate("Login")} state="no-style">
        <Text>Voltar ao login</Text>
      </GenericButton>
    </Sc.Container>
  );
}

export default ButtonList;
