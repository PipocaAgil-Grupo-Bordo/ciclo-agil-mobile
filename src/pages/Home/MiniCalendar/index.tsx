import { useNavigation } from "@react-navigation/native";
import CurrentMonth from "./CurrentMonth";
import WeeklySection from "./WeeklySection";
import { Sc } from "./style";
import { TouchableOpacity } from "react-native";
import { NavigationType } from "@routes/type";

function MiniCalendar() {
  const navigation = useNavigation<NavigationType>();

  // Função para navegar para a tela de calendário completo
  const handlePress = () => {
    navigation.navigate("MonthlyCalendar");
  };
  return (
    <TouchableOpacity onPress={handlePress}>
    <Sc.Container>
      <CurrentMonth />

      <WeeklySection />
    </Sc.Container>
    </TouchableOpacity>
  );
}

export default MiniCalendar;
