import { dateHelper } from "@utils/dateHelpers";
import { Sc } from "./style";

function CalendarHeader() {
  return (
    <Sc.Header>
      <Sc.HeaderTitle>
        <Sc.CurrentMonth>{dateHelper.currentMonth}</Sc.CurrentMonth> de{" "}
        <Sc.CurrentYear>{dateHelper.currentYear}</Sc.CurrentYear>
      </Sc.HeaderTitle>
    </Sc.Header>
  );
}
export default CalendarHeader;
