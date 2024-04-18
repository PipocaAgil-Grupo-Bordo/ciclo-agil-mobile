import { Sc } from "./style";
import GenericButton from "@components/GenericButton";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";
import { Gs } from "src/styles/globalStyles";

const Team: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  const testNext = () => {
    navigation.navigate("LastPeriod");
  };

  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <Gs.Title>Quem somos nós? Equipe Ciclo Ágil</Gs.Title>
        <Sc.SubTitle>Esses são os colaboradores que fizeram este app:</Sc.SubTitle>
      </Sc.Wrapper>
      <GenericButton onPress={testNext} state="accent">
        Próximo
      </GenericButton>
    </Sc.Container>
  );
};

export default Team;
