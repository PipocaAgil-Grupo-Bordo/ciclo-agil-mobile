import GenericButton from "@components/GenericButton";
import { Sc } from "./style";
import { useNavigation } from "@react-navigation/native";
import { ButtonsProps } from "../type";

const Buttons: React.FC<ButtonsProps> = ({ next }) => {
  const navigation = useNavigation();

  return (
    <Sc.Container>
      <GenericButton onPress={next} state="accent">
        Próximo
      </GenericButton>

      <GenericButton onPress={() => navigation.goBack()}>Não lembro</GenericButton>
    </Sc.Container>
  );
};

export default Buttons;
