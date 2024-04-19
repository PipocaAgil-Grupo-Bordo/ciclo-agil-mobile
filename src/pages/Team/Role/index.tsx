import React from "react";

import { Sc } from "./style";
import { RolesData } from "./type";
import Integrant from "../Integrant";

const Role: React.FC<RolesData> = ({ title, integrants }) => {
  return (
    <Sc.Container>
      <Sc.Wrapper>
        <Sc.RoleTitle>{title}</Sc.RoleTitle>
        {integrants.map((element, i) => (
          <Integrant
            key={i}
            photo={element.image}
            name={element.name}
            link={element.linkedIn}
          ></Integrant>
        ))}
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default Role;
