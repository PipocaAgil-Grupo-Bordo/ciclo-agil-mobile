import React from "react";
import { StyledContainer } from "./style";
import { FormInputsType } from "../../../types/auth";
import { useForm } from "react-hook-form";
import Form from "../../../components/Form";
import TextBox from "../../../components/TextBox";

const formInputs: FormInputsType[] = [
  {
    label: "Como eu gostaria de ser chamada:",
    name: "social-name",
    keyboard: "default",
    autoComplete: "given-name"
  },
  {
    label: "Data de nascimento:",
    name: "birthday",
    keyboard: "default",
    autoComplete: "birthdate-full"
  },
  {
    label: "Email:",
    name: "email",
    keyboard: "email-address",
    autoComplete: "email"
  },
  {
    label: "Repita o email:",
    name: "confirm-email",
    keyboard: "email-address",
    autoComplete: "email"
  },
  {
    label: "Senha:",
    name: "password",
    keyboard: "default",
    autoComplete: "password"
  },
  {
    label: "Repita a senha:",
    name: "confirm-password",
    keyboard: "default",
    autoComplete: "password"
  }
];

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
      <Form formInputs={formInputs} control={control} errors={errors}></Form>
      <TextBox>
        A senha deve conter no mínimo 8 caracteres, entre: caracteres especiais, letras e números,
        conter pelo menos: 1 caractere especial, 1 letra, 1 letra maiúscula, e 1 número.
      </TextBox>
    </StyledContainer>
  );
  
};

export default SignUpForm;
