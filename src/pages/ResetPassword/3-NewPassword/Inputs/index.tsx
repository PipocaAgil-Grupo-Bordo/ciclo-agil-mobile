import React from "react";
import GenericInput from "../../../../components/GenericInput";
import { InputsProps } from "../type";
import TextBox from "../../../../components/TextBox";
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

      {errorInstruction && (
        <StyledResetInstructionWrapper>
          <TextBox>
            <StyledResetInstruction>Por favor, tente novamente</StyledResetInstruction>
          </TextBox>

          <TextBox>
            <StyledResetInstruction>
              A senha deve conter no mínimo 8 caracteres entre: 1 letra minúscula, 1 letra
              maiúscula, 1 número e 1 caractere especial.
            </StyledResetInstruction>
          </TextBox>
        </StyledResetInstructionWrapper>
      )}
    </View>
  );
};

export default Inputs;
