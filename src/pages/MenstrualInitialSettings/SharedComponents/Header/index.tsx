import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

import { Sc } from "./style";
import { HeaderProps } from "./type";
import { NewColorScheme } from "@styles/globalStyles";

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
        <Entypo name="chevron-thin-left" size={24} color={NewColorScheme.text.primary} />
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
