import React from "react";

import GenericInput from "@components/GenericInput";
import Padlock from "@images/padlock.png";

import { EmailRequestSectionProps } from "../type";
import { Sc } from "./style";

function EmailRequestSection({ control, errors }: EmailRequestSectionProps) {
  return (
    <Sc.Container>
      <Sc.Icon source={Padlock} alt="A locked black padlock" />

      <Sc.Title>Esqueci minha senha</Sc.Title>

      <Sc.Text>
        Para redefinir sua senha, informe o e-mail cadastrado e enviaremos um código para
        recuperação da sua senha.
      </Sc.Text>

      <GenericInput
        label="Email:"
        name="email"
        control={control}
        errors={errors}
        keyboardType="email-address"
        autoComplete="email"
      />
    </Sc.Container>
  );
}

export default EmailRequestSection;
