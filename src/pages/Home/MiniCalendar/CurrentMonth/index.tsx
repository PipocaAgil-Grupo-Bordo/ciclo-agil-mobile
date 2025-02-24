import Icon from "@images/CalendarIcon.svg";
import { Text } from "react-native";

import { Sc } from "./style";

function CurrentMonth() {
  const currentMonth =
    new Date().toLocaleString("pt-BR", { month: "long" }).charAt(0).toUpperCase() +
    new Date().toLocaleString("pt-BR", { month: "long" }).slice(1);
  const currentYear = new Date().getFullYear();

  return (
    <Sc.Container>
      <Sc.IconWrapper>
        <Icon width={20} height={20} />
      </Sc.IconWrapper>
      <Sc.CurrentMonth>
        <Text>
          {currentMonth} de {currentYear}
        </Text>
      </Sc.CurrentMonth>
    </Sc.Container>
  );
}

export default CurrentMonth;
