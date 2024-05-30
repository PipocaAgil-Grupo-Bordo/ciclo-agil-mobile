import CalendarIcon from "react-native-vector-icons/Feather";
import { Sc } from "./style";

const CurrentMonth = () => {
  const currentMonth =
    new Date().toLocaleString("pt-BR", { month: "long" }).charAt(0).toUpperCase() +
    new Date().toLocaleString("pt-BR", { month: "long" }).slice(1);
  const currentYear = new Date().getFullYear();

  return (
    <Sc.Container>
      <CalendarIcon name="calendar" size={15} color="#414347" />

      <Sc.CurrentMonth>
        {currentMonth} de <Sc.StandOut>{currentYear}</Sc.StandOut>
      </Sc.CurrentMonth>
    </Sc.Container>
  );
};

export default CurrentMonth;
