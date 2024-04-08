import TextBox from "@components/TextBox";
import { Sc } from "./style";
import GenericButton from "@components/GenericButton";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";

const Team: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  const testNext = () => {
    navigation.navigate("LastPeriod");
  };

  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <TextBox>cia-58: Tela do time</TextBox>
        <GenericButton onPress={testNext} state="accent">Próximo</GenericButton>
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default Team;
