import React from "react";

import GenericInput from "@components/GenericInput";
import { Control, FieldValues, UseFormStateReturn } from "react-hook-form";
interface InputsProps {
  control: Control<FieldValues>; // Control do react-hook-form
  errors: UseFormStateReturn<FieldValues>["errors"]; // Para erros do react-hook-form
}

// TODO: FIX THIS ANY
function Inputs({ control, errors }: InputsProps) {
  const inputsData = [
    {
      label: "Como eu gostaria de ser chamada:",
      name: "name",
      placeholder: ""
    },
    {
      label: "Data de Nascimento:",
      name: "birthdate",
      placeholder: "DD/MM/AAAA"
    },
    {
      label: "Email:",
      name: "email",
      placeholder: ""
    },
    {
      label: "Repita o email:",
      name: "confirmEmail",
      placeholder: ""
    },
    {
      label: "Senha:",
      name: "password",
      placeholder: ""
    },
    {
      label: "Repita a senha:",
      name: "confirmPassword",
      placeholder: ""
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
