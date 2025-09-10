import React from "react";

import { Text } from "react-native";

import { Sc } from "./caption.style";

function Caption() {
  return (
    <Sc.Container>
      <Sc.Title>
        <Text>Entenda o seu ciclo</Text>
      </Sc.Title>
      <Sc.Captions>
        <Sc.Division>
          <Sc.DottedPurpleCircle />
          <Sc.Text>
            <Text>Dia de fluxo</Text>
          </Sc.Text>
        </Sc.Division>

        <Sc.Division>
          <Sc.DottedGoldCircle />
          <Sc.Text>
            <Text>Período Fértil</Text>
          </Sc.Text>
        </Sc.Division>

        <Sc.Division>
          <Sc.DottedFilledCircle />
          <Sc.Text>
            <Text>Possível Ovulação</Text>
          </Sc.Text>
        </Sc.Division>
      </Sc.Captions>
    </Sc.Container>
  );
}

export default Caption;
