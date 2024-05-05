import { useNavigation } from "@react-navigation/native";
import { Sc } from "./style";
import { HeaderProps } from "./type";
import Entypo from "react-native-vector-icons/Entypo";

const Header: React.FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation();

  return (
    <Sc.Container>
      <Sc.BackButton onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={30} color={"#444444"} />
      </Sc.BackButton>

      <Sc.Title>{title}</Sc.Title>
    </Sc.Container>
  );
};

export default Header;
