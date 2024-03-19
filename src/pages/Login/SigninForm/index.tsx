import React from "react";
import { ActivityIndicator, Alert, FlatList } from "react-native";
import {
  StyledForgottenPassword,
  StyledFormContainer,
  StyledLoginWrapper,
  StyledRegisterWrapper,
  StyledRegisterLink,
  StyledTitle
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../schemas/loginSchema";
import { FormInputsType, loginObject } from "../../../types/auth";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import authApi from "../../../services/authApi";
import { TouchableOpacity } from "react-native-gesture-handler";
import TextBox from "../../../components/TextBox";
import GenericButton from "../../../components/GenericButton";
import GenericInput from "../../../components/GenericInput";
import {  NavigationType } from "../type";

const SigninForm: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm<loginObject>({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = async (data: loginObject) => {
    try {
      await authApi.signInUser(data);

      reset({ email: "", password: "" }, { keepErrors: false });

      return navigation.navigate("Home");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const invalidCredentials = error.response?.status === 401;

        if (invalidCredentials) {
          setError("email", {
            type: "manual",
            message: ""
          });
          setError("password", {
            type: "manual",
            message: "E-mail ou Senha Incorretos. Tente Novamente."
          });
        } else {
          Alert.alert("Algo deu errado, tente novamente!");
        }
      }
    }
  };

  const formInputs: FormInputsType[] = [
    {
      label: "Email:",
      name: "email",
      keyboard: "email-address",
      autoComplete: "email"
    },
    {
      label: "Senha:",
      name: "password",
      keyboard: "default",
      autoComplete: "password"
    }
  ];

  return (
    <StyledFormContainer>
      <StyledTitle>Vamos começar?</StyledTitle>

      <FlatList<FormInputsType>
        data={formInputs}
        renderItem={({ item }) => (
          <GenericInput
            label={item.label}
            name={item.name}
            control={control}
            errors={errors}
            keyboardType={item.keyboard}
            autoComplete={item.autoComplete}
          />
        )}
      />

      <TouchableOpacity onPress={() => navigation.navigate("PasswordReset")}>
        <StyledForgottenPassword>Esqueci a senha</StyledForgottenPassword>
      </TouchableOpacity>

      <StyledLoginWrapper>
        <GenericButton isLoading={isSubmitting} state="accent" onPress={handleSubmit(onSubmit)}>
          Login
        </GenericButton>
      </StyledLoginWrapper>

      <StyledRegisterWrapper>
        <TextBox>Não tem conta?</TextBox>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <StyledRegisterLink> Registre-se</StyledRegisterLink>
        </TouchableOpacity>
      </StyledRegisterWrapper>
    </StyledFormContainer>
  );
};

export default SigninForm;
