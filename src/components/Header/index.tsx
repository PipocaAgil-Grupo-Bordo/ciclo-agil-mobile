import { useNavigation } from "@react-navigation/native";
import { Sc } from "./style";
import TopicText from "@components/TopicText";
import Entypo from "react-native-vector-icons/Entypo";
import { HeaderProps } from "./type";

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Sc.Container>
      <Sc.BackButton onPress={() => navigation.goBack()}>
        <Entypo
          style={{ position: "absolute", top: 0, left: -10 }}
          name="chevron-left"
          size={40}
          color="#9BABB7"
          onPress={() => navigation.goBack()}
        />
      </Sc.BackButton>

      <Sc.Title>
        <TopicText>{title}</TopicText>
      </Sc.Title>
    </Sc.Container>
  );
};

export default Header;
