import { Sc } from "./style";

const WeeklySection = () => {
  // const currentDay = new Date().getDate();
  const currentDay = 11;

  const weekBlock = [
    { id: 0, week: "D", day: 9 },
    { id: 1, week: "S", day: 10 },
    { id: 2, week: "T", day: 11 },
    { id: 3, week: "Q", day: 12 },
    { id: 4, week: "Q", day: 13 },
    { id: 5, week: "S", day: 14 },
    { id: 6, week: "S", day: 15 }
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
