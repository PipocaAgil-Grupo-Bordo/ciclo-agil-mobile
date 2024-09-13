import { useNavigation } from "@react-navigation/native";
import { Sc } from "./style";
import { HeaderProps } from "./type";
import Entypo from "react-native-vector-icons/Entypo";

/**
 * Header with back button and title
 *
 * @param title - Title of the screen
 */
function Header({ title }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Sc.Container>
      <Sc.BackButton onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={30} color={"#444444"} />
      </Sc.BackButton>

      {title && (
        <Sc.Container>
          <Sc.Title>{title}</Sc.Title>
        </Sc.Container>
      )}
    </Sc.Container>
  );
}

export default Header;
