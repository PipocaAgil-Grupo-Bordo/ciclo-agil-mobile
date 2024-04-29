import React from "react";
import { Sc } from "./style";
const CycleOverview: React.FC = () => {
  return (
    <Sc.Container>
      <Sc.Title>Meu Ciclo</Sc.Title>
      <Sc.OverviewCard>
        <Sc.Icon source={require("@images/clockIcon.png")} />
        <Sc.TextContainer>
          <Sc.MainText>Iniciou no dia</Sc.MainText>
          <Sc.SecondText></Sc.SecondText>
        </Sc.TextContainer>
      </Sc.OverviewCard>
      <Sc.OverviewCard>
        <Sc.Icon source={require("@images/dropIcon.png")} />
        <Sc.TextContainer>
          <Sc.MainText>Duração do período:</Sc.MainText>
          <Sc.SecondText></Sc.SecondText>
        </Sc.TextContainer>
      </Sc.OverviewCard>
      <Sc.OverviewCard>
        <Sc.Icon source={require("@images/cycleIcon.png")} />
        <Sc.TextContainer>
          <Sc.MainText>Duração do período:</Sc.MainText>
          <Sc.SecondText></Sc.SecondText>
        </Sc.TextContainer>
      </Sc.OverviewCard>
    </Sc.Container>
  );
};

export default CycleOverview;
