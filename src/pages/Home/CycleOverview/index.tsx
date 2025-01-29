import React from "react";
import { UserData } from "@type/auth";
import { Sc } from "./style";
import WaterDrop from "@images/water-drop.svg";
import Clock from "@images/clock.svg";

interface CycleOverviewProps {
  userProfile: UserData | undefined;
}

function CycleOverview({ userProfile }: CycleOverviewProps) {
  const DATA_MOCKUP = "Não informado";

  const cycleData = [
    {
      id: 1,
      title: "Iniciou no dia",
      time: DATA_MOCKUP,
      icon: <Clock width={24} height={24} />
    },
    {
      id: 2,
      title: "Duração do período",
      time: DATA_MOCKUP,
      icon: <WaterDrop width={24} height={24} />
    }
  ];

  return (
    <Sc.Container>
      <Sc.Title>Meu Ciclo</Sc.Title>
      {cycleData.map((data) => (
        <Sc.OverviewCard key={data.id}>
          <Sc.IconWrapper>{data.icon}</Sc.IconWrapper>
          <Sc.TextContainer>
            <Sc.MainText>{data.title}</Sc.MainText>
            <Sc.SecondText>{data.time}</Sc.SecondText>
          </Sc.TextContainer>
        </Sc.OverviewCard>
      ))}
    </Sc.Container>
  );
}

export default CycleOverview;
