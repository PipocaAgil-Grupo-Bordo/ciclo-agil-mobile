import React from "react";
import { Sc } from "./style";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
const CycleOverview: React.FC = () => {
  const ICON_SIZE = 20;
  const ICON_COLOR = "#8E37C9";

  const cycleData = [
    {
      id: 1,
      title: "Iniciou no dia",
      time: "00 dias atrás",
      icon: <Feather name="clock" size={ICON_SIZE} color={ICON_COLOR} />
    },
    {
      id: 2,
      title: "Duração do período",
      time: "Não informado",
      icon: <Feather name="droplet" size={ICON_SIZE} color={ICON_COLOR} />
    },
    {
      id: 3,
      title: "Duração do ciclo",
      time: "Não informado",
      icon: (
        <Entypo
          name="cycle"
          size={ICON_SIZE}
          color={ICON_COLOR}
          style={{ transform: [{ rotate: "45deg" }] }}
        />
      )
    }
  ];
  return (
    <Sc.Container>
      <Sc.Title>Meu Ciclo</Sc.Title>

      {cycleData.map((data) => (
        <Sc.OverviewCard key={data.id}>
          {data.icon}
          <Sc.TextContainer>
            <Sc.MainText>{data.title}</Sc.MainText>
            <Sc.MainText>{data.time}</Sc.MainText>
          </Sc.TextContainer>
        </Sc.OverviewCard>
      ))}
    </Sc.Container>
  );
};

export default CycleOverview;
