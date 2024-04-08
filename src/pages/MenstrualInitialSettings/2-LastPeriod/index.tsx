import TextBox from "@components/TextBox";
import GenericButton from "@components/GenericButton";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";
import { Sc } from "./style";

const LastPeriod: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  const testNext = () => {
    navigation.navigate("CycleDuration");
  };

  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <TextBox>cia-37: Tela data da última menstruação</TextBox>
        <GenericButton onPress={testNext} state="accent">Próximo</GenericButton>
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default LastPeriod;
