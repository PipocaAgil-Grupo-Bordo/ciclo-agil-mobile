import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";
import GenericButton from "@components/GenericButton";
import Modal from "@components/Modal";
import { Sc } from "./bottomButton.style";

function BottomButton() {
  const [isShowing, setIsShowing] = useState(false);
  const navigation = useNavigation<NavigationType>();

  return (
    <>
    <Sc.Container>
      <GenericButton onPress={() => setIsShowing(true)} state="accent">
        Próximo
      </GenericButton>
    </Sc.Container>

      {isShowing && (
        <Modal
        title="Vamos lá!"
        textContent="Para um melhor uso do app precisamos que você responda algumas perguntas"
        buttonText="Vamos lá"
        onPress={() => navigation.navigate("LastPeriod")}
        setReadyToNext={setIsShowing}
        />
      )}
      </>
  );
}
export default BottomButton;
