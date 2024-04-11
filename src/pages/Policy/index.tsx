import TextBox from "@components/TextBox";
import { Sc } from "./style";
import { Gs } from "src/styles/globalStyles";
import Terms from "./Terms";

const Policy: React.FC = () => {
  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <Gs.Title>{`Termos de Uso e \nPolítica de Privacidade`}</Gs.Title>
        <Terms/>
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default Policy;
