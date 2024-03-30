import TextBox from "@components/TextBox";
import { StyledContainer, StyledHyperlinkText, StyledText } from "./style";

const TermsOfService = () => {
  const handleTermsPopUp = () => {
    alert("Tela dos termos de uso");
  };

  const handlePrivacyPopUp = () => {
    alert("Tela da política de privacidade");
  };

  return (
    <StyledContainer>
      <TextBox>
        <StyledText>
          Ao clicar em cadastrar você estará concordando com os nossos{" "}
          <StyledHyperlinkText onPress={handleTermsPopUp}>Termos de Uso</StyledHyperlinkText> e{" "}
          <StyledHyperlinkText onPress={handlePrivacyPopUp}>
            Política de privacidade
          </StyledHyperlinkText>
          .
        </StyledText>
      </TextBox>
    </StyledContainer>
  );
};

export default TermsOfService;
