import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";

import { Sc } from "./style";
import SegmentedControl from "@components/CalendarPageHeader/SegmentedControl";
/**
 * Header with back button and title
 *
 * @param title - Title of the screen
 * @param color - Color of the back button icon (default: "#444444")
 * @param size - Size of the back button icon (default: 30)
 */
function CalendarPageHeader() {
  const navigation = useNavigation();
  const options = ["Mês", "Ano"];

  return (
    <Sc.Container>
      <Sc.BackButton onPress={() => navigation.goBack()}>
        <AntDesign name="close" size={24} color={"#444444"} />
      </Sc.BackButton>
      <SegmentedControl options={options} />
    </Sc.Container>
  );
}

export default CalendarPageHeader;
