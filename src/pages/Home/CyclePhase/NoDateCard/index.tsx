import React from "react";

import Icon from "@images/butterfly1.svg";
import { Text } from "react-native";

import { Sc } from "./style";

function NoDateCard() {
  return (
    <Sc.Container>
      <Sc.LeftIcon>
        <Sc.LeftIconText>
          <Text>?</Text>
        </Sc.LeftIconText>
      </Sc.LeftIcon>
      <Sc.MainContent>
        <Sc.Title>
          <Text>Sem data prevista para a pŕoxima menstruação</Text>
        </Sc.Title>
        <Sc.Subtitle>
          <Text>Dados insuficientes.</Text>
        </Sc.Subtitle>
      </Sc.MainContent>
      <Sc.IconWrapper>
        <Icon width={72} height={72} />
      </Sc.IconWrapper>
    </Sc.Container>
  );
}

export default NoDateCard;
