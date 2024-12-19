import { dateHelper } from "@utils/dateHelpers";
import { Sc } from "./style";

function WeeklySection() {
  const currentDay = new Date().getDate();
  const date = new Date();
  const daysOfWeek = dateHelper.selectWeek(date);
  const weekBlock = [
    { id: 0, week: "D" },
    { id: 1, week: "S" },
    { id: 2, week: "T" },
    { id: 3, week: "Q" },
    { id: 4, week: "Q" },
    { id: 5, week: "S" },
    { id: 6, week: "S" }
  ];

  return (
    <Sc.Container>
      {weekBlock.map((block) => (
        <Sc.WeekWrapper key={block.id}>
          <Sc.Week>{block.week}</Sc.Week>

          <Sc.DayWrapper hasBorder={daysOfWeek[block.id] === currentDay ? true : false}>
            <Sc.Day hasBorder={daysOfWeek[block.id] === currentDay ? true : false}>
              {daysOfWeek[block.id]}
            </Sc.Day>
          </Sc.DayWrapper>
        </Sc.WeekWrapper>
      ))}
    </Sc.Container>
  );
}

export default WeeklySection;
