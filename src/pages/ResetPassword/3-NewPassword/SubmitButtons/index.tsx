import { useNavigation } from "@react-navigation/native";
import GenericButton from "../../../../components/GenericButton";
import { SubmitButtonsArray, SubmitButtonsProps } from "../type";
import { StyledSubmitWrapper } from "./style";
import { NavigationType } from "../../../Login/type";
import React from "react";

const SubmitButtons: React.FC<SubmitButtonsProps> = ({ SubmitPassword }) => {
  const navigation = useNavigation<NavigationType>();
  const buttons: SubmitButtonsArray[] = [
    {
      label: "Redefinir",
      state: "accent",
      onPress: SubmitPassword
    },
    {
      label: "Voltar ao login",
      onPress: () => navigation.goBack()
    }
  ];
  return (
    <StyledSubmitWrapper>
      {buttons.map((button, i) => (
        <GenericButton key={i} state={button.state} onPress={button.onPress}>
          {button.label}
        </GenericButton>
      ))}
    </StyledSubmitWrapper>
  );
};

export default SubmitButtons;
