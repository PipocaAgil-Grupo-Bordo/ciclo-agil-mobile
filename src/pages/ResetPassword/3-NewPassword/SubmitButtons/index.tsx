import React from "react";

import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";

import GenericButton from "../../../../components/GenericButton";
import { SubmitButtonsArray, SubmitButtonsProps } from "../type";
import { Sc } from "./style";

function SubmitButtons({ SubmitPassword, isLoading }: SubmitButtonsProps) {
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
      state: "no-style",
      onPress: () => navigation.navigate("Login")
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
}

export default SubmitButtons;
