import React from "react";

import GenericInput from "@components/GenericInput";
import { Control, UseFormStateReturn, Path } from "react-hook-form";
import { RegisterFields } from "@type/auth";

interface InputsProps {
  control: Control<RegisterFields>;
  errors: UseFormStateReturn<RegisterFields>["errors"];
}

// TODO: FIX THIS ANY
function Inputs({ control, errors }: InputsProps) {
  const inputsData = [
    {
      label: "Nome:",
      name: "name" as Path<RegisterFields>,
      placeholder: "Digite seu nome"
    },
    {
      label: "Data de Nascimento:",
      name: "birthdate" as Path<RegisterFields>,
      placeholder: "dd/mm/aaaa"
    },
    {
      label: "E-mail:",
      name: "email" as Path<RegisterFields>,
      placeholder: "Digite seu E-mail"
    },
    {
      label: "Repita o email:",
      name: "confirmEmail" as Path<RegisterFields>,
      placeholder: "Repita o E-mail"
    },
    {
      label: "Senha:",
      name: "password" as Path<RegisterFields>,
      placeholder: "Digite sua senha"
    },
    {
      label: "Repita a senha:",
      name: "confirmPassword" as Path<RegisterFields>,
      placeholder: "Repita a senha"
    }
  ];

  return inputsData.map((input, i) => (
    <GenericInput
      key={i}
      label={input.label}
      name={input.name}
      textAlign="left"
      placeholder={input.placeholder}
      control={control}
      errors={errors}
    />
  ));
}

export default Inputs;
