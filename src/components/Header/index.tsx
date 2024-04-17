import { useNavigation } from "@react-navigation/native";
import { Sc } from "./style";
import TopicText from "@components/TopicText";
import { HeaderProps } from "./type";

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Sc.Container>
      <Sc.BackButton onPress={() => navigation.goBack()}>
        <Sc.BackIcon source={require("@images/back-arrow.png")} />
      </Sc.BackButton>

      <Sc.Title>
        <TopicText>{title}</TopicText>
      </Sc.Title>
    </Sc.Container>
  );
};

export default Header;
