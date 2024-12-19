import { Sc } from "./style";
import Icon from "@images/CalendarIcon.svg";

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
        {currentMonth} de {currentYear}
      </Sc.CurrentMonth>
    </Sc.Container>
  );
}

export default CurrentMonth;
