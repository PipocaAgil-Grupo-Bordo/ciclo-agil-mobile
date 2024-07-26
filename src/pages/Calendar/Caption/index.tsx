import React from "react";
import { Sc } from "./caption.style";

function Caption() {
  return (
    <Sc.Container>
      <Sc.Title> Entenda o seu ciclo </Sc.Title>
      <Sc.Captions>
        <Sc.Division>
          <Sc.GroupCaptions isFirstChild={true}>
            <Sc.PinkCircle />
            <Sc.Text>1° dia do ciclo</Sc.Text>
          </Sc.GroupCaptions>

          <Sc.GroupCaptions isFirstChild={true}>
            <Sc.DottedPurpleCircle />
            <Sc.Text>Ciclo Menstrual</Sc.Text>
          </Sc.GroupCaptions>
        </Sc.Division>

        <Sc.Division>
          <Sc.GroupCaptions isFirstChild={true}>
            <Sc.DottedGoldCircle />
            <Sc.Text>Período Fértil</Sc.Text>
          </Sc.GroupCaptions>

          <Sc.GroupCaptions isFirstChild={true}>
            <Sc.DottedFilledCircle />
            <Sc.Text>Ovulação</Sc.Text>
          </Sc.GroupCaptions>
        </Sc.Division>
      </Sc.Captions>
    </Sc.Container>
  );
}

export default Caption;
