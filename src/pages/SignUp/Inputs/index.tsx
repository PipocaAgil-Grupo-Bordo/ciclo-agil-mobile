import React from "react";
import GenericInput from "../../../components/GenericInput";

const Inputs: React.FC<any> = ({ control, errors }) => {
  const inputsData = [
    {
      label: "Como eu gostaria de ser chamada:",
      name: "socialName"
    },
    {
      label: "Data de Nascimento:",
      name: "birthday"
    },
    {
      label: "Email:",
      name: "email"
    },
    {
      label: "Repita o email:",
      name: "confirmEmail"
    },
    {
      label: "Senha:",
      name: "password"
    },
    {
      label: "Repita a senha:",
      name: "confirmPassword"
    }
  ];
  return inputsData.map((input, i) => (
    <GenericInput key={i} label={input.label} name={input.name} control={control} errors={errors} />
  ));
};

export default Inputs;
