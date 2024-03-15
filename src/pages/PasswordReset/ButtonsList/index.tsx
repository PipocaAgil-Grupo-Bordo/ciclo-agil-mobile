import React from "react";
import GenericButton from "../../../components/GenericButton";
import { StyledBottomSection } from "./style";
import { ButtonListProps } from "../type";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../Login/type";

const ButtonList: React.FC<ButtonListProps> = ({ onPress }) => {
  const navigation = useNavigation<NavigationType>();

  return (
    <StyledBottomSection>
      {/* TODO: REPLACE IT WITH THE FLATLIST COMPONENT PEDRO IS MAKING */}
      <GenericButton onPress={onPress} state="accent">
        Enviar
      </GenericButton>

      <GenericButton onPress={() => navigation.goBack()}>Voltar ao login</GenericButton>
    </StyledBottomSection>
  );
};

export default ButtonList;
