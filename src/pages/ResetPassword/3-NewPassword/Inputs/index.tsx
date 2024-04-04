import React from "react";
import GenericInput from "@components/GenericInput";
import { InputsProps } from "../type";
import TextBox from "@components/TextBox";
import { Sc } from "./style";

const Inputs: React.FC<InputsProps> = ({ control, errors, errorInstruction }) => {
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
          <TextBox>
            <Sc.Text>Por favor, tente novamente</Sc.Text>
          </TextBox>

          <Sc.InstructionWrapper>
            <TextBox>
              <Sc.Text>Senha deve conter no mínimo 8 caracteres.</Sc.Text>
            </TextBox>
            <TextBox>
              <Sc.Text>
                Pelo menos 1 caractere especial, 1 número, 1 letra minúscula e 1 letra maiúscula.
              </Sc.Text>
            </TextBox>
          </Sc.InstructionWrapper>
        </Sc.Wrapper>
      )}
    </Sc.Container>
  );
};

export default Inputs;
