import GenericButton from "@components/GenericButton";

import { Sc } from "./style";
import { ButtonsProps } from "./type";

function Buttons({ isLoading, nextWithData, nextWithoutData }: ButtonsProps) {
  return (
    <Sc.Container>
      <GenericButton isLoading={isLoading} onPress={nextWithData} state="accent">
        Próximo
      </GenericButton>

      <GenericButton onPress={nextWithoutData}>Não lembro</GenericButton>
    </Sc.Container>
  );
}

export default Buttons;
