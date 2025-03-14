import GenericButton from "@components/GenericButton";
import { Text } from "react-native";

import { Sc } from "./style";
import { ButtonsProps } from "./type";

function Buttons({ isLoading, nextWithData, nextWithoutData }: ButtonsProps) {
  return (
    <Sc.Container>
      <GenericButton isLoading={isLoading} onPress={nextWithData} state="accent">
        <Text>Próximo</Text>
      </GenericButton>

      <GenericButton onPress={nextWithoutData}>
        <Text>Não lembro</Text>
      </GenericButton>
    </Sc.Container>
  );
}

export default Buttons;
