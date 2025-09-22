import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

import { Sc } from "./style";
import { HeaderProps } from "./type";

/**
 * Header with back button and title
 *
 * @param title - Title of the screen
 * @param color - Color of the back button icon (default: "#444444")
 * @param size - Size of the back button icon (default: 30)
 */
function Header({ title, color, size }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <Sc.Container>
      <Sc.BackButton onPress={() => navigation.goBack()}>
        <Entypo name="chevron-left" size={size || 30} color={color || "#444444"} />
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
