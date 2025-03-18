import Chekmark from "@images/checkmark.png";
import { Text } from "react-native";

import { Sc } from "./style";

function Confirmation() {
  return (
    <>
      <Sc.CheckMark source={Chekmark} />

      <Sc.ConfirmationWrapper>
        <Text>
          <Sc.ConfirmationText>Enviamos um código para o email cadastrado!</Sc.ConfirmationText>
          <Sc.ConfirmationText>Verifique a sua caixa de entrada.</Sc.ConfirmationText>
        </Text>
      </Sc.ConfirmationWrapper>

      <Text>
        {" "}
        <Sc.Instructions>
          Insira no campo abaixo o código de verificação que enviamos para o seu email.
        </Sc.Instructions>
      </Text>
    </>
  );
}

export default Confirmation;
