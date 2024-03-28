import React from "react";
import GenericInput from "@components/GenericInput";
import { InputsProps } from "../type";
import TextBox from "@components/TextBox";
import { Text, View } from "react-native";
import { StyledResetInstruction, StyledResetInstructionWrapper } from "./style";

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
    <View>
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
        <StyledResetInstructionWrapper>
          <TextBox>
            <StyledResetInstruction>Por favor, tente novamente</StyledResetInstruction>
          </TextBox>

          <View>
            <TextBox>
              <StyledResetInstruction>
                Senha deve conter no mínimo 8 caracteres
              </StyledResetInstruction>
            </TextBox>
            <TextBox>
              <StyledResetInstruction>
                Pelo menos 1 caractere especial, 1 número, 1 letra minúscula e 1 letra maiúscula.
              </StyledResetInstruction>
            </TextBox>
          </View>
        </StyledResetInstructionWrapper>
      )}
    </View>
  );
};

export default Inputs;
