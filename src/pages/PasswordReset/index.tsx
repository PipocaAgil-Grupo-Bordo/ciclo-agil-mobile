import { StyledPasswordResetContainer } from "./style";
import TextBox from "../../components/TextBox";

const PasswordReset: React.FC = () => {
  return (
    <StyledPasswordResetContainer>
      <TextBox>Tela de recuperação de senha</TextBox>
    </StyledPasswordResetContainer>
  );
};

export default PasswordReset;
