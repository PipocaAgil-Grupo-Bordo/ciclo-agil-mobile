import Header from "@components/Header";

import CalendarListScreen from "./CalendarBody";
import { Sc } from "./style";

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
