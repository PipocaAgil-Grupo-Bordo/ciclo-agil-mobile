import React, { useEffect } from "react";
import { Alert, Text } from "react-native";
import { ForgotPasswordText, FormBox, FormButton, LoginInput } from "./style";
import { SubmitHandler, UseFormReset, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../schemas/loginSchema";
import { loginObject } from "../../../types/loginType";

const onSubmit: SubmitHandler<loginObject> = ({ email, password }) => {
  Alert.alert(email, password);
};

const SigninForm: React.FC = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<loginObject>({
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
        error={errors.email}
        placeholder={errors.email ? errors.email.message : ""}
        placeholderTextColor={errors.email ? "#FF0000" : ""}
      />

      <Text style={{ fontFamily: "Montserrat" }}>Senha:</Text>
      <LoginInput
        onChangeText={(text) => setValue("password", text)}
        secureTextEntry={true}
        error={errors.password}
        placeholder={errors.password ? errors.password.message : ""}
        placeholderTextColor={errors.password ? "#FF0000" : ""}
        textAlign="center"
        {...register("password")}
      />
      <ForgotPasswordText style={{ fontFamily: "Montserrat" }}>
        Esqueci a senha
      </ForgotPasswordText>
      <FormButton onPress={handleSubmit(onSubmit)}>
        <Text style={{ fontFamily: "Montserrat", color: "white" }}>Login</Text>
      </FormButton>
    </FormBox>
  );
};

export default SigninForm;
