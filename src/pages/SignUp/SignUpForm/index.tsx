import React from "react";
import { StyledInstructionText, StyledContainer } from "./style";
import { useForm } from "react-hook-form";
import Inputs from "../Inputs";
import GenericButton from "../../../components/GenericButton";
import { registerSchema } from "../../../schemas/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";

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

      <StyledInstructionText>
        A senha deve conter no mínimo 8 caracteres, entre: caracteres especiais, letras e números,
        conter pelo menos: 1 caractere especial, 1 letra, 1 letra maiúscula, e 1 número.
      </StyledInstructionText>

      <GenericButton state="accent" onPress={handleSubmit(onSubmit)}>
        Cadastrar
      </GenericButton>
    </StyledContainer>
  );
};

export default SignUpForm;
