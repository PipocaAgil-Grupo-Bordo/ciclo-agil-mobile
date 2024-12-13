import React from "react";
import { Sc } from "./style";
import Icon from "@images/butterfly1.svg";

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
      <Sc.IconWrapper>
        <Icon width={72} height={72} />
      </Sc.IconWrapper>
    </Sc.Container>
  );
}

export default NoDateCard;
