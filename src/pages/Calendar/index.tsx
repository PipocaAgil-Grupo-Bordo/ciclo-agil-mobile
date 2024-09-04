import CalendarApp from "./CalendarApp";
import { Sc } from "./style";
import Header from "@components/Header";
import Caption from "./Caption";

function CalendarC() {
  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Header title="Calendário" />
      <Caption />
      <CalendarApp />
    </Sc.Container>
  );
}
export default CalendarC;
