import React, { useState } from "react";

import NoDateCard from "./NoDateCard";
import { Sc } from "./style";

function CyclePhase() {
  const [nextMenstrualPeriodDate, setNextMenstrualPeriodDate] = useState("");
  // Mockup while no backend integration
  const CURRENT_CYCLE_PHASE = "Não informado";

  return nextMenstrualPeriodDate ? (
    <Sc.Container>
      <Sc.Title>Fase do ciclo: {CURRENT_CYCLE_PHASE}</Sc.Title>

      <Sc.Card>
        <Sc.CardText>
          Data provável da sua próxima menstruação: {nextMenstrualPeriodDate}
        </Sc.CardText>
      </Sc.Card>
    </Sc.Container>
  ) : (
    <NoDateCard />
  );
}

export default CyclePhase;
