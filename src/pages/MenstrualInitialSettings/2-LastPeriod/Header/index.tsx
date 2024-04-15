import { useNavigation } from "@react-navigation/native";
import { Sc } from "./style";
import TopicText from "@components/TopicText";
import { NavigationType } from "@type/routeType";

const Header: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  return (
    <Sc.Container>
      <Sc.BackButton onPress={() => navigation.goBack()}>
        <Sc.BackIcon source={require("@images/back-arrow.png")} />
      </Sc.BackButton>

      <Sc.Title>
        <TopicText>Qual foi a data de início da sua última menstruação?</TopicText>
      </Sc.Title>
    </Sc.Container>
  );
};

export default Header;
