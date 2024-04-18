import React from "react";
import { Sc } from "./style";
import { IntegrantData } from "./type";
import { handleLinking } from "@utils/linkingHelper";

const Integrant: React.FC<IntegrantData> = ({ photo, name, link }) => {
  return (
    <Sc.Container>
      <Sc.Wrapper>
        <Sc.Photo src={require(`@images/integrantsPhotos/${photo}`)} />
        <Sc.Name>{name}</Sc.Name>
        <Sc.Link title="linkedin" onPress={() => handleLinking(link)} />
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default Integrant;
