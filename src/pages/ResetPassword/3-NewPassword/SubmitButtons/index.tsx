import { useNavigation } from "@react-navigation/native";
import GenericButton from "../../../../components/GenericButton";
import { SubmitButtonsArray, SubmitButtonsProps } from "../type";
import React from "react";
import { NavigationType } from "@type/routeType";
import { Sc } from "./style";

const SubmitButtons: React.FC<SubmitButtonsProps> = ({ SubmitPassword, isLoading }) => {
  const navigation = useNavigation<NavigationType>();
  const buttons: SubmitButtonsArray[] = [
    {
      label: "Redefinir",
      state: "accent",
      onPress: SubmitPassword,
      loading: isLoading
    },
    {
      label: "Voltar ao login",
      onPress: () => navigation.goBack()
    }
  ];
  return (
    <Sc.Container>
      {buttons.map((button, i) => (
        <GenericButton
          key={i}
          state={button.state}
          isLoading={button.loading}
          onPress={button.onPress}
        >
          {button.label}
        </GenericButton>
      ))}
    </Sc.Container>
  );
};

export default SubmitButtons;
