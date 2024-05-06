import { Sc } from "./style";
import GenericButton from "@components/GenericButton";
import { Gs } from "src/styles/globalStyles";
import Squad from "./Squad";
import { useState } from "react";
import Modal from "@components/Modal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import { NavigationType } from "@routes/type";

const Team: React.FC = () => {
  const [readyToNext, setReadyToNext] = useState(false);
  const navigation = useNavigation<NavigationType>()

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Sc.Container>
        <Sc.Wrapper>
          <Gs.Title>Quem somos nós? Equipe Ciclo Ágil</Gs.Title>
          <Sc.SubTitle>Esses são os colaboradores que fizeram este app:</Sc.SubTitle>
          <Squad />
        </Sc.Wrapper>
        <GenericButton onPress={() => setReadyToNext(true)} state="accent">
          Próximo
        </GenericButton>
        {readyToNext && (
          <Modal
            title="Vamos lá!"
            textContent="Para um melhor uso do app precisamos que você responda algumas perguntas"
            buttonText="Vamos lá"
            onPress={() => navigation.navigate("LastPeriod")}
            setReadyToNext={setReadyToNext}
          />
        )}
      </Sc.Container>
    </GestureHandlerRootView>
  );
};

export default Team;
