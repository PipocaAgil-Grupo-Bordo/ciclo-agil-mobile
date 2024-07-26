import React from "react";
import { Sc } from "./caption.style";

function Caption() {
  return (
    <Sc.Container>
      <Sc.Title> Entenda o seu ciclo </Sc.Title>
      <Sc.Captions>
        <Sc.LeftCaptions>
          <Sc.GroupCaptions>
            <Sc.PinkCircle />
            <Sc.Text>1° dia do ciclo</Sc.Text>
          </Sc.GroupCaptions>

          <Sc.GroupCaptions>
            <Sc.DottedPurpleCircle />
            <Sc.Text>Ciclo Menstrual</Sc.Text>
          </Sc.GroupCaptions>
        </Sc.LeftCaptions>

        <Sc.RightCaptions>
          <Sc.GroupCaptions>
            <Sc.DottedGoldCircle />
            <Sc.Text>Período Fértil</Sc.Text>
          </Sc.GroupCaptions>

          <Sc.GroupCaptions>
            <Sc.DottedFilledCircle />
            <Sc.Text>Ovulação</Sc.Text>
          </Sc.GroupCaptions>
        </Sc.RightCaptions>
      </Sc.Captions>
    </Sc.Container>
  );
}

export default Caption;
