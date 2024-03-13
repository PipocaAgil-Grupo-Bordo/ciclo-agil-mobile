import TextBox from "../../components/TextBox";
import { Container, InstructionText, TopicName } from "./style";

const SignUp: React.FC = () => {
  return (
    <Container>
      <TopicName>Registre-se</TopicName>
      <InstructionText>
        Para continuar digite seu nome, data de nascimento, email e senha.
      </InstructionText>
      <TextBox>Como eu gostaria de ser chamada:</TextBox>
      <TextBox>Data de nascimento:</TextBox>
      <TextBox>Email:</TextBox>
      <TextBox>Repita o email:</TextBox>
      <TextBox>Senha:</TextBox>
      <TextBox>Repita a senha:</TextBox>
    </Container>
  );
};

export default SignUp;
