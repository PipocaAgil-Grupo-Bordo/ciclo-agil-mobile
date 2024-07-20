import React from "react";
import { Sc } from "./style";
import { IntegrantData } from "./type";
import { handleLinking } from "@utils/linkingHelper";
import { squadPhotos } from "@constants/squadData/squadPhotos";
import { ImageSourcePropType } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { ColorScheme } from "@styles/globalStyles";

function Integrant({ name, link }: IntegrantData) {
  const photo = squadPhotos[name] as ImageSourcePropType;

  return (
    <Sc.Container>
      <Sc.Wrapper>
        <Sc.Photo source={photo} />
        <Sc.Name>{name}</Sc.Name>
        <Feather
          style={{ alignSelf: "flex-start" }}
          name="link-2"
          size={20}
          color={ColorScheme.textSecondary}
          onPress={() => handleLinking(link)}
        />
      </Sc.Wrapper>
    </Sc.Container>
  );
}

export default Integrant;
