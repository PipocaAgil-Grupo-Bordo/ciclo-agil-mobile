import GenericInput from "../../../components/GenericInput";
import { StyledLockeIcon, StyledResetInfo, StyledTitle, StyledTopSectionContainer } from "./style";
import React from "react";
import { EmailRequestSectionProps } from "../type";

const EmailRequestSection: React.FC<EmailRequestSectionProps> = ({ control, errors }) => {
  return (
    <StyledTopSectionContainer>
      <StyledLockeIcon
        source={require("../../../../assets/images/locker.png")}
        alt="A locked black padlock"
      />

      <StyledTitle>Esqueci minha senha</StyledTitle>

      <StyledResetInfo>
        Para redefinir sua senha, informe o e-mail cadastrado e enviaremos um link para recuperão da
        sua senha.
      </StyledResetInfo>

      <GenericInput
        label="Email:"
        name="email"
        control={control}
        errors={errors}
        keyboardType="email-address"
        autoComplete="email"
      />
    </StyledTopSectionContainer>
  );
};

export default EmailRequestSection;
