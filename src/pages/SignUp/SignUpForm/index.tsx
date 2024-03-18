import React from "react";
import { StyledInstructionText, StyledContainer } from "./style";
import { FormInputsType } from "../../../types/auth";
import { useForm } from "react-hook-form";
import Form from "../../../components/Form";
import TextBox from "../../../components/TextBox";
import GenericInput from "../../../components/GenericInput";
import Inputs from "../Inputs";
import GenericButton from "../../../components/GenericButton";

const SignUpForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm({
    // resolver: yupResolver(loginSchema)
  });
  return (
    <StyledContainer>
      <Inputs control={control} errors={errors} />

      <StyledInstructionText>
        A senha deve conter no mínimo 8 caracteres, entre: caracteres especiais, letras e números,
        conter pelo menos: 1 caractere especial, 1 letra, 1 letra maiúscula, e 1 número.
      </StyledInstructionText>

      <GenericButton state="accent">Cadastrar</GenericButton>
    </StyledContainer>
  );
};

export default SignUpForm;
