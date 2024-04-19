import React from "react";
import { Sc } from "./style";
import { IntegrantData, SquadPhotos } from "./type";
import { handleLinking } from "@utils/linkingHelper";
import { squadPhotos } from "@constants/squadData/squadPhotos";

const Integrant: React.FC<IntegrantData> = ({ name, link }) => {
  return (
    <Sc.Container>
      <Sc.Wrapper>
        <Sc.Photo source={squadPhotos[name]} />
        <Sc.Name>{name}</Sc.Name>
        <Sc.Link title="linkedin" onPress={() => handleLinking(link)} />
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default Integrant;
