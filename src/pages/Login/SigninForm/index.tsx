import React, { useEffect } from "react";
import { Alert, Text } from "react-native";
import {
  ForgotPasswordText,
  FormBox,
  FormButton,
  IncompatibilityErrorMessage,
  LetsBegin,
  RegisterLink,
  RegisterText,
} from "./style";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../schemas/loginSchema";
import { loginObject } from "../../../types/loginType";
import Input from "../../../components/Input";

const SigninForm: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
    setError,
  } = useForm<loginObject>({
    resolver: yupResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<loginObject> = ({ email, password }) => {
    Alert.alert(email, password);
  };
  const onDeniedSubmit: SubmitErrorHandler<loginObject> = ({
    email,
    password,
  }) => {
    reset({ email: "", password: "" }, { keepErrors: true });
    setError("root", { type: "submit error" });
  };

  return (
    <FormBox>
      <LetsBegin>Vamos começar?</LetsBegin>
      <Text style={{ fontFamily: "Montserrat" }}>Email:</Text>
      <Input name="email" control={control} errors={errors} />
      <Text style={{ fontFamily: "Montserrat" }}>Senha:</Text>
      <Input name="password" control={control} errors={errors} />
      {errors.root && (
        <IncompatibilityErrorMessage>
          E-mail ou senha incorretos. Tente novamente
        </IncompatibilityErrorMessage>
      )}
      <ForgotPasswordText style={{ fontFamily: "Montserrat" }}>
        Esqueci a senha
      </ForgotPasswordText>
      <FormButton onPress={handleSubmit(onSubmit, onDeniedSubmit)}>
        <Text style={{ fontFamily: "Montserrat", color: "white" }}>Login</Text>
      </FormButton>
      <RegisterText>
        Não tem conta?<RegisterLink> Registre-se</RegisterLink>
      </RegisterText>
    </FormBox>
  );
};

export default SigninForm;
