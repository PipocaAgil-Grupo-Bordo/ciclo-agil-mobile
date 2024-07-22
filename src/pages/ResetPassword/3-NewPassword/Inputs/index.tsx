import React from "react";
import GenericInput from "@components/GenericInput";
import { InputsProps } from "../type";
import { Sc } from "./style";

function Inputs({ control, errors, errorInstruction }: InputsProps) {
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
    <Sc.Container>
      {passwordInputs.map((input, i) => (
        <GenericInput
          key={i}
          label={input.label}
          name={input.name}
          control={control}
          errors={errors}
        />
      ))}

      {/* TODO: Move to a different file after sprint 2 is over */}
      {errorInstruction && (
        <Sc.Wrapper>
          <Sc.Text>Por favor, tente novamente</Sc.Text>

          <Sc.InstructionWrapper>
            <Sc.Text>Senha deve conter no mínimo 8 caracteres.</Sc.Text>
            <Sc.Text>
              Pelo menos 1 caractere especial, 1 número, 1 letra minúscula e 1 letra maiúscula.
            </Sc.Text>
          </Sc.InstructionWrapper>
        </Sc.Wrapper>
      )}
    </Sc.Container>
  );
}

export default Inputs;
