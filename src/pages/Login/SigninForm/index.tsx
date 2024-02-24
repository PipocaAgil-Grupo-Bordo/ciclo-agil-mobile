import React from "react";
import { Button, Text, TextInput, View } from "react-native";

// import { Container } from './styles';

const SigninForm: React.FC = () => {
  return (
    <View>
      <View>
        <Text style={{ fontFamily: "Montserrat" }}>Email:</Text>
        <TextInput keyboardType="email-address" textAlign="center" />
        <Text style={{ fontFamily: "Montserrat" }}>Senha:</Text>
        <TextInput secureTextEntry={true} textAlign="center" />
        <Text style={{ fontFamily: "Montserrat" }}>Esqueci a senha</Text>
        <Button title="Login"></Button>
      </View>
    </View>
  );
};

export default SigninForm;
