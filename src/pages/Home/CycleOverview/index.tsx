import React from "react";
import { Sc } from "./style";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
const CycleOverview: React.FC = () => {
  return (
    <Sc.Container>
      <Sc.Title>Meu Ciclo</Sc.Title>
      <Sc.OverviewCard>
        <Feather name="clock" size={20} color={"#8E37C9"} />
        <Sc.TextContainer>
          <Sc.MainText>Iniciou no dia</Sc.MainText>
          <Sc.SecondText>00 dias atrás</Sc.SecondText>
        </Sc.TextContainer>
      </Sc.OverviewCard>
      <Sc.OverviewCard>
        <Feather name="droplet" size={20} color={"#8E37C9"} />
        <Sc.TextContainer>
          <Sc.MainText>Duração do período:</Sc.MainText>
          <Sc.SecondText>Não informado</Sc.SecondText>
        </Sc.TextContainer>
      </Sc.OverviewCard>
      <Sc.OverviewCard>
        <Entypo
          name="cycle"
          size={20}
          color={"#8E37C9"}
          style={{ transform: [{ rotate: "45deg" }] }}
        />
        <Sc.TextContainer>
          <Sc.MainText>Duração do período:</Sc.MainText>
          <Sc.SecondText>Não informado</Sc.SecondText>
        </Sc.TextContainer>
      </Sc.OverviewCard>
    </Sc.Container>
  );
};

export default CycleOverview;
