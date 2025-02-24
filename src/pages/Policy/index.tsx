import Header from "@components/Header";

import { Sc } from "./style";
import Terms from "./Terms";

function Policy() {
  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Header title="Termos de Uso e Política de Privacidade" />

      <Terms />
    </Sc.Container>
  );
}

export default Policy;
