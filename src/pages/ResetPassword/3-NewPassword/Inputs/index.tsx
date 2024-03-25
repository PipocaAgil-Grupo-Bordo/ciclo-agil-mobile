import React from "react";
import GenericInput from "../../../../components/GenericInput";
import { StyledInputContainer } from "./style";
import { InputsProps } from "../type";

const Inputs: React.FC<InputsProps> = ({ control, errors }) => {
  const passwordInputs = [
    {
      label: "Nova senha:",
      name: "password"
    },
    {
      label: "Repita a nova senha:",
      name: "confirmPassword"
    }
  ];

  return (
    <StyledInputContainer>
      {passwordInputs.map((input, i) => (
        <GenericInput
          key={i}
          label={input.label}
          name={input.name}
          control={control}
          errors={errors}
        />
      ))}
    </StyledInputContainer>
  );
};

export default Inputs;
