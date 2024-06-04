import React from "react";
import { Sc } from "./style";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import { UserData } from "@type/auth";

const CycleOverview: React.FC<{ userProfile: UserData | undefined }> = ({ userProfile }) => {
  const ICON_SIZE = 20;
  const ICON_COLOR = "#8E37C9";
  const DATA_MOCKUP = "Não informado";
  const cycleData = [
    {
      id: 1,
      title: "Iniciou no dia",
      time: DATA_MOCKUP,
      icon: <Feather name="clock" size={ICON_SIZE} color={ICON_COLOR} />
    },
    {
      id: 2,
      title: "Duração do período",
      time: DATA_MOCKUP,
      icon: <Feather name="droplet" size={ICON_SIZE} color={ICON_COLOR} />
    },
    {
      id: 3,
      title: userProfile?.menstrualCycleDuration
        ? `Duração do ciclo: ${userProfile?.menstrualCycleDuration} dias`
        : "Duração do ciclo",
      time: DATA_MOCKUP,
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
            <Sc.SecondText>{data.time}</Sc.SecondText>
          </Sc.TextContainer>
        </Sc.OverviewCard>
      ))}
    </Sc.Container>
  );
};

export default CycleOverview;
