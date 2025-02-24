import { useState } from "react";

import GenericButton from "@components/GenericButton";
import Modal from "@components/Modal";
import useBackButtonExit from "@hooks/useBackButtonExit";
import { useNavigation } from "@react-navigation/core";
import { NavigationType } from "@routes/type";
import { Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Squad from "./Squad";
import { Sc } from "./style";

function Team() {
  const [readyToNext, setReadyToNext] = useState(false);
  const navigation = useNavigation<NavigationType>();
  useBackButtonExit(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Sc.Container>
        <Sc.Wrapper>
          <Sc.Title>
            <Text>Quem somos nós? Equipe Ciclo Ágil</Text>
          </Sc.Title>
          <Sc.SubTitle>
            <Text>Esses são os colaboradores que fizeram este app:</Text>
          </Sc.SubTitle>
          <Squad />
        </Sc.Wrapper>
        <GenericButton onPress={() => setReadyToNext(true)} state="accent">
          <Text>Próximo</Text>
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
}

export default Team;
