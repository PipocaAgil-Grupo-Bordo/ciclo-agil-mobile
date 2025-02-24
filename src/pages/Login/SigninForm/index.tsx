import React from "react";

import GenericButton from "@components/GenericButton";
import { useTokenContext } from "@context/useUserToken";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";
import { loginSchema } from "@schemas/loginSchema";
import authApi from "@services/authApi";
import { LoginFields } from "@type/auth";
import { tokenAuth } from "@utils/tokenAuthHelper";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Alert, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Sc } from "./style";
import Inputs from "../Inputs";

function SigninForm() {
  const navigation = useNavigation<NavigationType>();
  const { setRefreshToken, setAccessToken } = useTokenContext();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm<LoginFields>({
    resolver: yupResolver(loginSchema)
  });

  async function onSubmit(data: LoginFields) {
    try {
      const response = await authApi.signInUser(data);

      tokenAuth.fetchTokens(response, setAccessToken, setRefreshToken);

      reset({ email: "", password: "" }, { keepErrors: false });

      return navigation.navigate("MainTabs");
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
  }

  return (
    <Sc.Container>
      <Sc.Title>
        <Text>Vamos começar?</Text>
      </Sc.Title>

      <Inputs control={control} errors={errors} />

      <TouchableOpacity onPress={() => navigation.navigate("EmailRequest")}>
        <Sc.ForgottenPassword>
          <Text>Esqueci a senha</Text>
        </Sc.ForgottenPassword>
      </TouchableOpacity>

      <Sc.LoginWrapper>
        <GenericButton isLoading={isSubmitting} state="accent" onPress={handleSubmit(onSubmit)}>
          <Text>Login</Text>
        </GenericButton>
      </Sc.LoginWrapper>

      <Sc.RegisterWrapper>
        <Sc.Text>
          <Text>Não tem conta?</Text>
        </Sc.Text>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Sc.RegisterLink>
            <Text> Registre-se</Text>
          </Sc.RegisterLink>
        </TouchableOpacity>
      </Sc.RegisterWrapper>
    </Sc.Container>
  );
}

export default SigninForm;
