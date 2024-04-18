import React from "react";

import { Sc } from "./style";

const Integrant: React.FC = ({}) => {
  return (
    <Sc.Container>
      <Sc.Wrapper>
        <Sc.Photo />
        <Sc.Name />
        <Sc.Link/>
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default Integrant;
