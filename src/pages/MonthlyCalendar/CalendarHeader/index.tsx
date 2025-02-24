import { ColorScheme } from "@styles/globalStyles";
import CalendarIcon from "react-native-vector-icons/Feather";

import { Sc } from "./style";

interface CalendarHeaderProps {
  date?: XDate; // Ajuste conforme o tipo do `date`
}

function CalendarHeader({ date }: CalendarHeaderProps) {
  // Use a data fornecida ou a data atual
  const nativeDate = date ? new Date(date.toString()) : new Date();
  const month = nativeDate.toLocaleString("pt-BR", { month: "long" });
  const year = nativeDate.getFullYear();

  return (
    <Sc.Header>
      <Sc.HeaderTitle>
        <CalendarIcon name="calendar" size={20} color={ColorScheme.icon.idle} />{" "}
        <Sc.CurrentMonth>{month.charAt(0).toUpperCase() + month.slice(1)}</Sc.CurrentMonth> de{" "}
        <Sc.CurrentYear>{year}</Sc.CurrentYear>
      </Sc.HeaderTitle>
    </Sc.Header>
  );
}

export default CalendarHeader;
