import TextBox from "../../../components/TextBox";
import { StyledNewPasswordContainer } from "./styled";

const NewPassword: React.FC = () => {
  return (
    <StyledNewPasswordContainer>
      <TextBox>Redefinir senha</TextBox>
    </StyledNewPasswordContainer>
  );
};

export default NewPassword;
