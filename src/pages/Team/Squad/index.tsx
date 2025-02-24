import React from "react";

import SquadData from "@constants/squadData/squad.json";

import { Sc } from "./style";
import Role from "../Role";

function Squad() {
  const roles = SquadData.data;

  return (
    <Sc.Container>
      <Sc.Wrapper>
        {roles.map((element, i) => (
          <Role key={i} integrants={element.integrants} title={element.title}></Role>
        ))}
      </Sc.Wrapper>
    </Sc.Container>
  );
}

export default Squad;
