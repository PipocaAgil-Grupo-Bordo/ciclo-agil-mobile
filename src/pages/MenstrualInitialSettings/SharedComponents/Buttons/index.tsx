import GenericButton from "@components/GenericButton";
import { Sc } from "./style";
import { ButtonsProps } from "./type";

const Buttons: React.FC<ButtonsProps> = ({ isLoading, nextWithData, nextWithoutData }) => {
  return (
    <Sc.Container>
      <GenericButton isLoading={isLoading} onPress={nextWithData} state="accent">
        Próximo
      </GenericButton>

      <GenericButton onPress={nextWithoutData}>Não lembro</GenericButton>
    </Sc.Container>
  );
};

export default Buttons;
