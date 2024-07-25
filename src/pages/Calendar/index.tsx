import React from "react";
import { Sc } from "./style";
import { Text } from "react-native";
import Caption  from "./Caption";

function Calendar() {
  return (
    <Sc.Container>
      <Text>Tela do calendário</Text>
      <Caption />
    </Sc.Container>
  );
}

export default Calendar;
