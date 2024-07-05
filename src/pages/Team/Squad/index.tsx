import React from "react";
import { Sc } from "./style";
import SquadData from "@constants/squadData/squad.json";
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
