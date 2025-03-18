import React, { useState } from "react";

import { Text } from "react-native";

import NoDateCard from "./NoDateCard";
import { Sc } from "./style";

function CyclePhase() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [nextMenstrualPeriodDate, setNextMenstrualPeriodDate] = useState("");
  // Mockup while no backend integration
  const CURRENT_CYCLE_PHASE = "Não informado";

  return nextMenstrualPeriodDate ? (
    <Sc.Container>
      <Sc.Title>
        <Text>Fase do ciclo: {CURRENT_CYCLE_PHASE}</Text>
      </Sc.Title>

      <Sc.Card>
        <Sc.CardText>
          <Text>Data provável da sua próxima menstruação: {nextMenstrualPeriodDate}</Text>
        </Sc.CardText>
      </Sc.Card>
    </Sc.Container>
  ) : (
    <NoDateCard />
  );
}

export default CyclePhase;
