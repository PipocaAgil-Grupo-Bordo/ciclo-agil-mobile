import React from "react";
import { Sc } from "./style";

function NoDateCard() {
  return (
    <Sc.Container>
      <Sc.LeftIcon>
        <Sc.LeftIconText>?</Sc.LeftIconText>
      </Sc.LeftIcon>
      <Sc.MainContent>
        <Sc.Title>Sem data prevista para a pŕoxima menstruação</Sc.Title>
        <Sc.Subtitle>Dados insuficientes.</Sc.Subtitle>
      </Sc.MainContent>
    </Sc.Container>
  );
}

export default NoDateCard;
