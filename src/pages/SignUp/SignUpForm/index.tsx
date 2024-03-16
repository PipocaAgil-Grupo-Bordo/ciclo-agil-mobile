import React from "react";
import { InstructionText, StyledContainer } from "./style";
import { FormInputsType } from "../../../types/auth";
import { useForm } from "react-hook-form";
import Form from "../../../components/Form";
import TextBox from "../../../components/TextBox";
import GenericInput from "../../../components/GenericInput";

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
      <GenericInput
        label="Como eu gostaria de ser chamada:"
        control={control}
        errors={errors}
        name="social-name"
      />
      <GenericInput label="Data de Nascimento:" control={control} errors={errors} name="birthday" />
      <GenericInput label="Email:" control={control} errors={errors} name="email" />
      <GenericInput
        label="Repita o email:"
        control={control}
        errors={errors}
        name="confirm-email"
      />
      <GenericInput label="Senha:" control={control} errors={errors} name="password" />
      <GenericInput
        label="Repita a Senha:"
        control={control}
        errors={errors}
        name="confirm-password"
      />
      
      <InstructionText>
        A senha deve conter no mínimo 8 caracteres, entre: caracteres especiais, letras e números,
        conter pelo menos: 1 caractere especial, 1 letra, 1 letra maiúscula, e 1 número.
      </InstructionText>
      
    </StyledContainer>
  );
  
};

export default SignUpForm;
