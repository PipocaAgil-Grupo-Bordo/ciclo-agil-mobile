import Input from "../../components/Input";
import TextBox from "../../components/TextBox";
import { Container, InstructionText, TopicName } from "./style";

const SignUp: React.FC = () => {
  return (
    <Container>
      <TopicName>Registre-se</TopicName>
      <InstructionText>
        Para continuar digite seu nome, data de nascimento, email e senha.
      </InstructionText>
    </Container>
  );
};

export default SignUp;
