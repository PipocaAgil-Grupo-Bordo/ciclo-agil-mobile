import CurrentMonth from "./CurrentMonth";
import WeeklySection from "./WeeklySection";
import { Sc } from "./style";

const MiniCalendar = () => {

  return (
    <Sc.Container>
      <CurrentMonth />

      <WeeklySection />
    </Sc.Container>
  );
};

export default MiniCalendar;
