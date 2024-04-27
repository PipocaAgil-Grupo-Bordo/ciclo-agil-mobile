import { Sc } from "./style";
import { Gs } from "src/styles/globalStyles";
import Terms from "./Terms";
import Entypo from "react-native-vector-icons/Entypo";
import { NavigationType } from "@routes/type";
import { useNavigation } from "@react-navigation/native";

const Policy: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Entypo
        style={{ position: "absolute", top: 0, left: -10 }}
        name="chevron-left"
        size={40}
        color="#9BABB7"
        onPress={() => navigation.navigate("SignUp")}
      />

      <Sc.Wrapper>
        <Gs.Title>{`Termos de Uso e Política de Privacidade`}</Gs.Title>
        <Terms />
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default Policy;
