import React from "react";
import GenericButton from "@components/GenericButton";
import { StyledBottomSection } from "./style";
import { ButtonListProps } from "../type";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";

const ButtonList: React.FC<ButtonListProps> = ({ onPress, isLoading }) => {
  const navigation = useNavigation<NavigationType>();

  return (
    <StyledBottomSection>
      <GenericButton onPress={onPress} isLoading={isLoading} state="accent">
        Enviar
      </GenericButton>

      <GenericButton onPress={() => navigation.goBack()}>Voltar ao login</GenericButton>
    </StyledBottomSection>
  );
};

export default ButtonList;
