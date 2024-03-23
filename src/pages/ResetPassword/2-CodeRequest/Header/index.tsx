import TextBox from "../../../../components/TextBox";
import { StyledCheckMark, StyledConfirmationText, StyledConfirmationWrapper, StyledInstructionText } from "./style";

const Header = () => {
  return (
    <>
      <StyledCheckMark source={require("../../../../../assets/images/checkmark.png")} />

      <StyledConfirmationWrapper>
        <StyledConfirmationText>Enviamos um código para o email cadastrado!</StyledConfirmationText>
        <StyledConfirmationText>Verifique a sua caixa de entrada.</StyledConfirmationText>
      </StyledConfirmationWrapper>

      <TextBox>
        <StyledInstructionText>
          Insira no campo abaixo o código de verificação que enviamos para o seu email.
        </StyledInstructionText>
      </TextBox>
    </>
  );
};

export default Header;
