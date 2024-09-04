import { Sc } from "./style";

function Confirmation() {
  return (
    <>
      <Sc.CheckMark source={require("@images/checkmark.png")} />

      <Sc.ConfirmationWrapper>
        <Sc.ConfirmationText>Enviamos um código para o email cadastrado!</Sc.ConfirmationText>
        <Sc.ConfirmationText>Verifique a sua caixa de entrada.</Sc.ConfirmationText>
      </Sc.ConfirmationWrapper>

      <Sc.Instructions>
        Insira no campo abaixo o código de verificação que enviamos para o seu email.
      </Sc.Instructions>
    </>
  );
}

export default Confirmation;
