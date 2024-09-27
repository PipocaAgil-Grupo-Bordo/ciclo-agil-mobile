import React from "react";
import { Sc } from "./caption.style";

function Caption() {
  return (
    <Sc.Container>
      <Sc.Title> Entenda o seu ciclo </Sc.Title>
      <Sc.Captions>
        <Sc.Division>
          <Sc.GroupCaptions isFirstChild={false}>
            <Sc.DottedPurpleCircle />
            <Sc.Text>Período Menstrual</Sc.Text>
          </Sc.GroupCaptions>
        </Sc.Division>

        <Sc.Division>
          <Sc.GroupCaptions isFirstChild={true}>
            <Sc.DottedGoldCircle />
            <Sc.Text>Período Fértil</Sc.Text>
          </Sc.GroupCaptions>

          <Sc.GroupCaptions isFirstChild={false}>
            <Sc.DottedFilledCircle />
            <Sc.Text>Ovulação</Sc.Text>
          </Sc.GroupCaptions>
        </Sc.Division>
      </Sc.Captions>
    </Sc.Container>
  );
}

export default Caption;
