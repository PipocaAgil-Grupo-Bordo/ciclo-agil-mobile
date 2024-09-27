import CalendarListScreen from "./CalendarBody";
import { Sc } from "./style";
import Header from "@components/Header";

function AnnualCalendar() {
  return (
    <Sc.ContainerWithoutScroll>
      <Sc.Content>
        <Header title="Calendário" />
        <Sc.Calendar>
          <CalendarListScreen />
        </Sc.Calendar>
      </Sc.Content>
    </Sc.ContainerWithoutScroll>
  );
}

export default AnnualCalendar;