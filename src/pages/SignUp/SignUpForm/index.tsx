import React from "react";
import { StyledInstructionText, StyledContainer } from "./style";
import { useForm } from "react-hook-form";
import Inputs from "../Inputs";
import GenericButton from "../../../components/GenericButton";
import { registerSchema } from "../../../schemas/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Text } from "react-native";

const SignUpForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = () => {
    try {
      alert("Passaria pra próxima tela");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledContainer>
      <Inputs control={control} errors={errors} />

      <StyledInstructionText
        error={(errors && errors.password)! || (errors && errors.confirmPassword)!}
      >
        A senha deve conter no mínimo 8 caracteres entre: 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial.
      </StyledInstructionText>

      <GenericButton state="accent" onPress={handleSubmit(onSubmit)}>
        Cadastrar
      </GenericButton>
    </StyledContainer>
  );
};

export default SignUpForm;
