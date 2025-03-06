import React from "react";
import { Alert } from "react-native";
import { Sc } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@schemas/loginSchema";
import { LoginFields } from "@type/auth";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import authApi from "@services/authApi";
import { TouchableOpacity } from "react-native-gesture-handler";
import GenericButton from "@components/GenericButton";
import { NavigationType } from "@routes/type";
import Inputs from "../Inputs";
import { useTokenContext } from "@context/useUserToken";
import { tokenAuth } from "@utils/tokenAuthHelper";
import Button from "@components/Button";

function SigninForm() {
  const navigation = useNavigation<NavigationType>();
  const { setRefreshToken, setAccessToken } = useTokenContext();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
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
      <Sc.Title>Vamos começar?</Sc.Title>

      <Inputs control={control} errors={errors} />

      <TouchableOpacity onPress={() => navigation.navigate("EmailRequest")}>
        <Sc.ForgottenPassword>Esqueci a senha</Sc.ForgottenPassword>
      </TouchableOpacity>

      <Sc.LoginWrapper>
        <Button
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
          isLoading={isSubmitting}
          fontweight="600"
          variant="default"
        >
          Login
        </Button>
      </Sc.LoginWrapper>

      <Sc.RegisterWrapper>
        <Sc.Text>Não tem conta?</Sc.Text>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Sc.RegisterLink> Registre-se</Sc.RegisterLink>
        </TouchableOpacity>
      </Sc.RegisterWrapper>
    </Sc.Container>
  );
}

export default SigninForm;
