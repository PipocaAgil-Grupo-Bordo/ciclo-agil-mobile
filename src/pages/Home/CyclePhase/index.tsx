import React from "react";
import { Sc } from "./style";

const CyclePhase: React.FC = () => {
  // Mockup while no backend integration
  const CURRENT_CYCLE_PHASE = "Não informado";
  const NEXT_MENSTRUATION_DATE = "";

  return (
    <Sc.Container>
      <Sc.Title>Fase do ciclo: {CURRENT_CYCLE_PHASE}</Sc.Title>

      <Sc.Card>
        <Sc.CardText>
          Data provável da sua próxima menstruação: {NEXT_MENSTRUATION_DATE}
        </Sc.CardText>
      </Sc.Card>
    </Sc.Container>
  );
};

export default CyclePhase;
