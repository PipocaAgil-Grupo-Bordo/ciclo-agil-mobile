import { Sc } from "./style";
import { useState } from "react";
import { CycleDataType, CyclesType } from "./type";
import Header from "@components/Header";
import Buttons from "../SharedComponents/Buttons";
import Information from "../SharedComponents/Information";
import DropdownMenu from "../SharedComponents/DropdownMenu";
import ScrollableMenu from "../SharedComponents/ScrollableMenu";

const CycleDuration: React.FC = () => {
  // Constants
  const REGULAR = 21;
  const IRREGULAR = 7;

  const cycles: CyclesType[] = ["Regular", "Irregular"];
  const regularCycle = Array.from({ length: 35 - REGULAR + 1 }, (_, index) => index + 21);
  const irregularCycle = Array.from({ length: 120 - IRREGULAR + 1 }, (_, index) => index + 7);

  const [cycleData, setCycleData] = useState<CycleDataType>({
    cycle: "Regular",
    duration: REGULAR
  });

  const handleCycleChange = (value: CyclesType) => {
    setCycleData((prevData) => ({
      ...prevData,
      cycle: value
    }));
  };

  const handleDurationChange = (value: number) => {
    const isRegular = cycleData.cycle === "Regular";
    const newValue = isRegular ? value + REGULAR : value + IRREGULAR;

    setCycleData((prevData) => ({
      ...prevData,
      duration: newValue
    }));
  };

  const handleWhichItemArrayShouldShowUp = () => {
    const isRegular = cycleData.cycle === "Regular";

    if (isRegular) {
      return regularCycle;
    }

    return irregularCycle;
  };

  return (
    <Sc.Container>
      <Sc.TopWrapper>
        <Header title="Quanto tempo dura seu ciclo?" />

        <DropdownMenu
          label="Seu ciclo é:"
          onChange={handleCycleChange}
          options={cycles}
          currentOption={cycleData.cycle}
        />

        <ScrollableMenu
          items={handleWhichItemArrayShouldShowUp()}
          onIndexChange={handleDurationChange}
        />

        <Information text="Não se preocupe se você não souber quanto tempo dura o seu ciclo, você pode registrar depois" />
      </Sc.TopWrapper>

      <Buttons
        // Placeholders for now till backend integration
        nextWithData={() => alert("Próxima tela com os dados selecionados.")}
        nextWithoutData={() => alert("Próxima tela sem os dados selecionados.")}
      />
    </Sc.Container>
  );
};

export default CycleDuration;
