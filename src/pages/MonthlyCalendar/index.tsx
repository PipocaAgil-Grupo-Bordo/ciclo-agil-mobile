import Header from "@components/Header";

import CalendarApp from "./CalendarApp";
import Caption from "./Caption";
import { Sc } from "./style";

function MonthlyCalendar() {
  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Header title="Calendário" />
      <CalendarApp />
      <Caption />
    </Sc.Container>
  );
}
export default MonthlyCalendar;
