import React from "react";

import { Sc } from "./style";
import { RolesData } from "./type";
import Integrant from "../Integrant";
import { Dimensions } from "react-native";

const Role: React.FC<RolesData> = ({ title, integrants }) => {
  const { width, height } = Dimensions.get("window");
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
};

export default Role;
