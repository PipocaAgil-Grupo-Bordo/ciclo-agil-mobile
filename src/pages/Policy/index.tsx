import { Sc } from "./style";
import Terms from "./Terms";
import Header from "@components/Header";

function Policy() {
  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <Header title="Termos de Uso e Política de Privacidade" />
        <Terms />
      </Sc.Wrapper>
    </Sc.Container>
  );
}

export default Policy;
