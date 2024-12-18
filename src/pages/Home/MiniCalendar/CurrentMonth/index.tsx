import CalendarIcon from "react-native-vector-icons/Feather";
import { Sc } from "./style";
import { ColorScheme } from "@styles/globalStyles";

function CurrentMonth() {
  const currentMonth =
    new Date().toLocaleString("pt-BR", { month: "long" }).charAt(0).toUpperCase() +
    new Date().toLocaleString("pt-BR", { month: "long" }).slice(1);
  const currentYear = new Date().getFullYear();

  return (
    <Sc.Container>
      <CalendarIcon name="calendar" size={18} color={ColorScheme.icon.idle} />
      <Sc.CurrentMonth>
        {currentMonth} de {currentYear}
      </Sc.CurrentMonth>
    </Sc.Container>
  );
}

export default CurrentMonth;
