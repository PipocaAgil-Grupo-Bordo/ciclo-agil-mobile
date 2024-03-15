import React from "react";
import { ActivityIndicator, Alert, FlatList } from "react-native";
import {
  ForgotPasswordText,
  FormBox,
  LoginWrapper,
  RegisterContainer,
  RegisterLink,
  TitleText
} from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../schemas/loginSchema";
import { loginObject } from "../../../types/loginType";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";
import authApi from "../../../services/authApi";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RootStackParamList } from "../../../types/routeType";
import TextBox from "../../../components/TextBox";
import GenericButton from "../../../components/GenericButton";
import GenericInput from "../../../components/GenericInput";
import { FormInputsType } from "../type";

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
    <FormBox>
      <TitleText>Vamos começar?</TitleText>

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
        <ForgotPasswordText>Esqueci a senha</ForgotPasswordText>
      </TouchableOpacity>

      <LoginWrapper>
        <GenericButton state="accent" onPress={handleSubmit(onSubmit)}>
          {isSubmitting ? <ActivityIndicator color={"#fff"} /> : "Login"}
        </GenericButton>
      </LoginWrapper>

      <RegisterContainer>
        <TextBox>Não tem conta?</TextBox>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <RegisterLink> Registre-se</RegisterLink>
        </TouchableOpacity>
      </RegisterContainer>
    </FormBox>
  );
};

export default SigninForm;
