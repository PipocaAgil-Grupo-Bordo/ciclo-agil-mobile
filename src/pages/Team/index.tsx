import { Sc } from "./style";
import GenericButton from "@components/GenericButton";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";
import { Gs } from "src/styles/globalStyles";
import Squad from "./Squad";

const Team: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  const testNext = () => {
    navigation.navigate("LastPeriod");
  };

  return (
    <Sc.Container>
      <Sc.Wrapper>
        <Gs.Title>Quem somos nós? Equipe Ciclo Ágil</Gs.Title>
        <Sc.SubTitle>Esses são os colaboradores que fizeram este app:</Sc.SubTitle>
        <Squad />
      </Sc.Wrapper>
      <GenericButton onPress={testNext} state="accent">
        Próximo
      </GenericButton>
    </Sc.Container>
    
  );
};

export default Team;
