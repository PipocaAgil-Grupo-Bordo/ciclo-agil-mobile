import React from "react";
import { Sc } from "./style";
import SquadData from "@constants/squad.json";
import Role from "../Role";
const Squad: React.FC = () => {
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
};

export default Squad;
