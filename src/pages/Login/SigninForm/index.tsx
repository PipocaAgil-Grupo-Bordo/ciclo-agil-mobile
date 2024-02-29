import React, { useEffect } from "react";
import {
  Alert,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ForgotPasswordText, FormBox, FormButton, LoginInput } from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../schemas/loginSchema";
import { loginObject } from "../../../types/loginType";

const onSubmit: SubmitHandler<loginObject> = ({ email, password }) => {
  Alert.alert(email, password);
};

const SigninForm: React.FC = () => {
  const { register, setValue, handleSubmit } = useForm<loginObject>({
    resolver: yupResolver(loginSchema),
  });

  return (
    <FormBox>
      <Text style={{ fontFamily: "Montserrat" }}>Email:</Text>
      <LoginInput
        onChangeText={(text) => setValue("email", text)}
        keyboardType="email-address"
        textAlign="center"
        {...register("email")}
      />
      <Text style={{ fontFamily: "Montserrat" }}>Senha:</Text>
      <LoginInput
        onChangeText={(text) => setValue("password", text)}
        secureTextEntry={true}
        textAlign="center"
        {...register("password")}
      />
      <ForgotPasswordText style={{ fontFamily: "Montserrat"}}>Esqueci a senha</ForgotPasswordText>
      <FormButton onPress={handleSubmit(onSubmit)}>
        <Text style={{ fontFamily: "Montserrat", color: "white" }}>Login</Text>
      </FormButton>
    </FormBox>
  );
};

export default SigninForm;
