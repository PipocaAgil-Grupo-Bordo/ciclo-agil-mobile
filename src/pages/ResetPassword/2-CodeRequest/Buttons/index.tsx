import GenericButton from "@components/GenericButton";
import { useNavigation } from "@react-navigation/core";
import { NavigationType } from "@routes/type";

import { ButtonsInfo, ButtonsProps } from "../type";
import { Sc } from "./style";

function Buttons({ onPress }: ButtonsProps) {
  const navigation = useNavigation<NavigationType>();

  const buttons: ButtonsInfo[] = [
    {
      label: "Enviar",
      state: "accent",
      onPress: onPress
    },
    {
      label: "Voltar ao login",
      state: "no-style",
      onPress: () => navigation.navigate("Login")
    }
  ];

  return (
    <Sc.Container>
      <Sc.Text>
        Caso não encontre o email na sua caixa de entrada, verifique a pasta de spam.
      </Sc.Text>
      {buttons.map((button, i) => (
        <GenericButton key={i} state={button.state} onPress={button.onPress}>
          {button.label}
        </GenericButton>
      ))}
    </Sc.Container>
  );
}

export default Buttons;
