import React from "react";

import { Sc } from "./style";
import { IntegrantData } from "./type";

const Integrant: React.FC<IntegrantData> = ({ photo, name, link }) => {
  return (
    <Sc.Container>
      <Sc.Wrapper>
        <Sc.Photo />
        <Sc.Name />
        <Sc.Link />
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default Integrant;
