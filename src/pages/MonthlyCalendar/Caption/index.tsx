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
          <Sc.GroupCaptions isFirstChild={false}>
            <Sc.DottedPurpleCircle />
            <Sc.Text>
              <Text>Período Menstrual</Text>
            </Sc.Text>
          </Sc.GroupCaptions>
        </Sc.Division>

        <Sc.Division>
          <Sc.GroupCaptions isFirstChild={true}>
            <Sc.DottedGoldCircle />
            <Sc.Text>
              <Text>Período Fértil</Text>
            </Sc.Text>
          </Sc.GroupCaptions>

          <Sc.GroupCaptions isFirstChild={false}>
            <Sc.DottedFilledCircle />
            <Sc.Text>
              <Text>Ovulação</Text>
            </Sc.Text>
          </Sc.GroupCaptions>
        </Sc.Division>
      </Sc.Captions>
    </Sc.Container>
  );
}

export default Caption;
