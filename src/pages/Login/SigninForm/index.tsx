import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { FormBox, FormButton, LoginInput } from "./style";

const SigninForm: React.FC = () => {
  return (
    <FormBox>
      <Text style={{ fontFamily: "Montserrat" }}>Email:</Text>
      <LoginInput keyboardType="email-address" textAlign="center" />
      <Text style={{ fontFamily: "Montserrat" }}>Senha:</Text>
      <LoginInput secureTextEntry={true} textAlign="center" />
      <Text style={{ fontFamily: "Montserrat" }}>Esqueci a senha</Text>
      <FormButton>
        <Text style={{ fontFamily: "Montserrat" , color:"white"}}>Login</Text>
      </FormButton>
    </FormBox>
  );
};

export default SigninForm;
