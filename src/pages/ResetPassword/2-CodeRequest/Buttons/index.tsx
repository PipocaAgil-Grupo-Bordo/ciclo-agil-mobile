import { View } from "react-native";
import GenericButton from "../../../../components/GenericButton";
import TextBox from "../../../../components/TextBox";
import { StatesType } from "../../../../components/GenericButton/type";
import { ButtonsInfo, ButtonsProps } from "../type";
import { StyledButtonsContainer, StyledInstructionText } from "./style";
import { useNavigation } from "@react-navigation/core";
import { NavigationType } from "../../../Login/type";

const Buttons: React.FC<ButtonsProps> = ({ onPress }) => {
  const navigation = useNavigation<NavigationType>();

  const buttons: ButtonsInfo[] = [
    {
      label: "Enviar",
      state: "accent",
      onPress: onPress
    },
    {
      label: "Voltar ao login",
      state: "default",
      onPress: () => navigation.goBack()
    }
  ];

  return (
    <StyledButtonsContainer>
      <StyledInstructionText>
        <TextBox>
          Caso não encontre o email na sua caixa de entrada, verifique a pasta de spam.
        </TextBox>
      </StyledInstructionText>
      {buttons.map((button, i) => (
        <GenericButton key={i} state={button.state} onPress={button.onPress}>
          {button.label}
        </GenericButton>
      ))}
    </StyledButtonsContainer>
  );
};

export default Buttons;
