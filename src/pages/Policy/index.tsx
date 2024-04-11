import { Sc } from "./style";
import { Gs } from "src/styles/globalStyles";
import Terms from "./Terms";
import Entypo from "react-native-vector-icons/Entypo";
const Policy: React.FC = () => {
  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <Entypo name="chevron-left" size={20} color="#9BABB7" />
        <Gs.Title>{`Termos de Uso e \nPolítica de Privacidade`}</Gs.Title>
        <Terms />
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default Policy;
