import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";
import { Sc } from "./style";
import Header from "./Header";
import CyclePicker from "./CyclePicker";
import { useState } from "react";
import { CyclesType } from "./type";
import DurationPicker from "./DurationPicker";
import Information from "./Information";
import Buttons from "./Buttons";

interface CycleDataType {
  cycle: CyclesType,
  duration: number
}

const CycleDuration: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  const [cycleData, setCycleData] = useState<CycleDataType>({
    cycle: "Regular",
    duration: 1
  });

  const handleCycleChange = (value: CyclesType) => {
    setCycleData((prevData) => ({
      ...prevData,
      cycle: value
    }));
  };

  const handleDurationChange = (value: number) => {
    setCycleData((prevData) => ({
      ...prevData,
      duration: value
    }));
  };

  return (
    <Sc.Container>
      <Sc.TopWrapper>
        <Header />

        <CyclePicker onChange={handleCycleChange} />

        <DurationPicker cycle={cycleData.cycle} onIndexChange={handleDurationChange} />

        <Information />
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
