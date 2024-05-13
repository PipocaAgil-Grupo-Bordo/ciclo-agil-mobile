import { Sc } from "./style";
import Terms from "./Terms";
import { NavigationType } from "@routes/type";
import { useNavigation } from "@react-navigation/native";
import Header from "@components/Header";

const Policy: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <Header title="Termos de Uso e Política de Privacidade" />
        <Terms />
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default Policy;
