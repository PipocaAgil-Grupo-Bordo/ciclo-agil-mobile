import GenericButton from "@components/GenericButton";
import { Sc } from "./style";
import { useNavigation } from "@react-navigation/native";
import { ButtonsProps } from "../type";

const Buttons: React.FC<ButtonsProps> = ({ nextWithData, nextWithoutData }) => {
  return (
    <Sc.Container>
      <GenericButton onPress={nextWithData} state="accent">
        Próximo
      </GenericButton>

      <GenericButton onPress={nextWithoutData}>Não lembro</GenericButton>
    </Sc.Container>
  );
};

export default Buttons;
