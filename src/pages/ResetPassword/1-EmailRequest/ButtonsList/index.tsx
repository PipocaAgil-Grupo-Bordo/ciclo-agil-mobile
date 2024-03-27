import React from "react";
import GenericButton from "../../../../components/GenericButton";
import { StyledBottomSection } from "./style";
import { ButtonListProps } from "../type";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../../../types/routeType";

const ButtonList: React.FC<ButtonListProps> = ({ onPress }) => {
  const navigation = useNavigation<NavigationType>();

  return (
    <StyledBottomSection>
      <GenericButton onPress={onPress} state="accent">
        Enviar
      </GenericButton>

      <GenericButton onPress={() => navigation.goBack()}>Voltar ao login</GenericButton>
    </StyledBottomSection>
  );
};

export default ButtonList;
