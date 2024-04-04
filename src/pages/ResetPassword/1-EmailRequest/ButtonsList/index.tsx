import React from "react";
import GenericButton from "@components/GenericButton";
import { ButtonListProps } from "../type";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";
import { Sc } from "./style";

const ButtonList: React.FC<ButtonListProps> = ({ onPress, isLoading }) => {
  const navigation = useNavigation<NavigationType>();

  return (
    <Sc.Container>
      <GenericButton onPress={onPress} isLoading={isLoading} state="accent">
        Enviar
      </GenericButton>

      <GenericButton onPress={() => navigation.goBack()}>Voltar ao login</GenericButton>
    </Sc.Container>
  );
};

export default ButtonList;
