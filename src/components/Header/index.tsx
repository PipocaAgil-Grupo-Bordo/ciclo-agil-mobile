import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

import { Sc } from "./style";
import { HeaderProps } from "./type";

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
        <Sc.TitleContainer>
          <Sc.Title>{title}</Sc.Title>
        </Sc.TitleContainer>
      )}
    </Sc.Container>
  );
}

export default Header;
