import React from "react";
import { Sc } from "./style";

function NoDateCard() {
  return (
    <Sc.Container>
      <Sc.LeftIcon>?</Sc.LeftIcon>
      <Sc.MainContent>
        <Sc.Title>Fase do ciclo:</Sc.Title>
        <Sc.Subtitle>Data provável da sua próxima menstruação:</Sc.Subtitle>
      </Sc.MainContent>
    </Sc.Container>
  );
}

export default NoDateCard;
