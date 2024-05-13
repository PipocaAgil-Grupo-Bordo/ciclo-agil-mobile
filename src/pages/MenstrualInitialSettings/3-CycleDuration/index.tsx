import { Sc } from "./style";
import { useState } from "react";
import { CycleDataType, CyclesType } from "./type";
import Header from "@components/Header";
import Buttons from "../SharedComponents/Buttons";
import Information from "../SharedComponents/Information";
import DropdownMenu from "../SharedComponents/DropdownMenu";
import ScrollableMenu from "../SharedComponents/ScrollableMenu";
import { menstrualApi } from "@services/menstrualApi";
import { useTokenContext } from "@context/useUserToken";
import Modal from "@components/Modal";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";

const CycleDuration: React.FC = () => {
  // Constants
  const REGULAR = 21;
  const IRREGULAR = 7;

  const cycles: CyclesType[] = ["Regular", "Irregular"];
  const regularCycle = Array.from({ length: 35 - REGULAR + 1 }, (_, index) => index + REGULAR);
  const irregularCycle = Array.from(
    { length: 120 - IRREGULAR + 1 },
    (_, index) => index + IRREGULAR
  );

  const [isLoading, setIsLoading] = useState(false);
  const [cycleData, setCycleData] = useState<CycleDataType>({
    cycle: "Regular",
    duration: REGULAR
  });
  const [showModal, setShowModal] = useState(false);

  const { accessToken } = useTokenContext();
  const navigation = useNavigation<NavigationType>();

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

  const handleNavigation = () => {
    navigation.navigate("Home");

    if (showModal) {
      setShowModal(false);
    }
  };

  const handleCycleSubmission = async () => {
    try {
      setIsLoading(true);

      await menstrualApi.currentCycle(
        {
          isMenstrualCycleRegular: cycleData.cycle === "Regular" ? true : false,
          menstrualCycleDuration: cycleData.duration
        },
        accessToken!
      );

      setIsLoading(false);
      handleNavigation();
    } catch (error) {
      // Missing error for code 400 and 401 (not sure what they're for yet, need the doc updated)
      setIsLoading(false);
      setShowModal(true);
      console.log(error); // #temporary for debugging
    }
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
        isLoading={isLoading}
        nextWithData={handleCycleSubmission}
        nextWithoutData={handleNavigation}
      />

      {showModal && (
        <Modal
          title="Ops"
          textContent="Algo deu errado"
          buttonText="Avançar mesmo assim"
          setReadyToNext={setShowModal}
          onPress={() => navigation.navigate("Home")}
        />
      )}
    </Sc.Container>
  );
};

export default CycleDuration;
