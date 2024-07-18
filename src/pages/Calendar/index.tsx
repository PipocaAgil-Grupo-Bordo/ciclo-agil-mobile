import CalendarApp from "./CalendarApp";
import { Sc } from "./style";
import Header from "@components/Header";

function CalendarC() {
  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Header title="Calendário" />

      <CalendarApp />
    </Sc.Container>
  );
}

export default CalendarC;
