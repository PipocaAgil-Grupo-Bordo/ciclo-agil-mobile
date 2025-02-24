import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";

import { Sc } from "./style";

function TermsOfService() {
  const navigation = useNavigation<NavigationType>();

  function handleTermsPopUp() {
    navigation.navigate("Policy");
  }

  return (
    <Sc.Container>
      <Sc.Text>
        Ao clicar em cadastrar você estará concordando com os nossos{" "}
        <Sc.Hyperlink onPress={handleTermsPopUp}>
          Termos de Uso e Política de privacidade
        </Sc.Hyperlink>
        .
      </Sc.Text>
    </Sc.Container>
  );
}

export default TermsOfService;
