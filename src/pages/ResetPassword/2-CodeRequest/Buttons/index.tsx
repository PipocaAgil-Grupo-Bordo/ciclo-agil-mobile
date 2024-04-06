import { NavigationType } from "@type/routeType";
import GenericButton from "@components/GenericButton";
import TextBox from "@components/TextBox";
import { ButtonsInfo, ButtonsProps } from "../type";
import { useNavigation } from "@react-navigation/core";
import { Sc } from "./style";

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
    <Sc.Container>
      <Sc.Text>
        <TextBox>
          Caso não encontre o email na sua caixa de entrada, verifique a pasta de spam.
        </TextBox>
      </Sc.Text>
      {buttons.map((button, i) => (
        <GenericButton key={i} state={button.state} onPress={button.onPress}>
          {button.label}
        </GenericButton>
      ))}
    </Sc.Container>
  );
};

export default Buttons;
