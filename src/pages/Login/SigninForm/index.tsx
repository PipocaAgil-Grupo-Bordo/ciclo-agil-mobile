import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LoginInput } from "./style";

// import { Container } from './styles';

const SigninForm: React.FC = () => {
  return (
    <View>
      <View >
        <Text style={{ fontFamily: "Montserrat" }}>Email:</Text>
        <LoginInput keyboardType="email-address" textAlign="center" />
        <Text style={{ fontFamily: "Montserrat" }}>Senha:</Text>
        <LoginInput secureTextEntry={true} textAlign="center" />
        <Text style={{ fontFamily: "Montserrat" }}>Esqueci a senha</Text>
        <TouchableOpacity>
          <Text style={{ fontFamily: "Montserrat" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SigninForm;
