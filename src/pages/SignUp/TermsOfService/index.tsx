import TextBox from "@components/TextBox";
import { Sc } from "./style";

const TermsOfService = () => {
  const handleTermsPopUp = () => {
    alert("Tela dos termos de uso");
  };

  const handlePrivacyPopUp = () => {
    alert("Tela da política de privacidade");
  };

  return (
    <Sc.Container>
      <TextBox>
        <Sc.Text>
          Ao clicar em cadastrar você estará concordando com os nossos{" "}
          <Sc.Hyperlink onPress={handleTermsPopUp}>Termos de Uso</Sc.Hyperlink> e{" "}
          <Sc.Hyperlink onPress={handlePrivacyPopUp}>Política de privacidade</Sc.Hyperlink>.
        </Sc.Text>
      </TextBox>
    </Sc.Container>
  );
};

export default TermsOfService;
