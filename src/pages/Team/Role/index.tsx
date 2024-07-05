import React from "react";

import { Sc } from "./style";
import { RolesData } from "./type";
import Integrant from "../Integrant";

function Role({ title, integrants }: RolesData) {
  return (
    <Sc.Container>
      <Sc.Wrapper>
        <Sc.RoleTitle>{title}</Sc.RoleTitle>
        {integrants.map((element, i) => (
          <Integrant key={i} name={element.name} link={element.linkedIn}></Integrant>
        ))}
      </Sc.Wrapper>
    </Sc.Container>
  );
}

export default Role;
