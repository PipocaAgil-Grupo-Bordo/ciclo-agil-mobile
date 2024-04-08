import TextBox from "@components/TextBox";
import { Sc } from "./style";

const Policy: React.FC = () => {
  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <TextBox>cia-65: Tela de termos de uso ou na Política de Privacidade</TextBox>
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default Policy;
