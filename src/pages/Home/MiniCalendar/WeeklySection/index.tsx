import { Sc } from "./style";

const WeeklySection = () => {
  const currentDay = new Date().getDate();

  const weekBlock = [
    { id: 0, week: "D", day: 12 },
    { id: 1, week: "S", day: 13 },
    { id: 2, week: "T", day: 14 },
    { id: 3, week: "Q", day: 15 },
    { id: 4, week: "Q", day: 16 },
    { id: 5, week: "S", day: 17 },
    { id: 6, week: "S", day: 18 }
  ];

  return (
    <Sc.Container>
      {weekBlock.map((block) => (
        <Sc.WeekWrapper key={block.id}>
          <Sc.Week>{block.week}</Sc.Week>

          <Sc.DayWrapper hasBorder={block.day === currentDay ? true : false}>
            <Sc.Day>{block.day}</Sc.Day>
          </Sc.DayWrapper>
        </Sc.WeekWrapper>
      ))}
    </Sc.Container>
  );
};

export default WeeklySection;
