import React from "react";
import { Button, Text, TextInput, View } from "react-native";

// import { Container } from './styles';

const SigninForm: React.FC = () => {
  return (
    <View>
      <View>
        <Text>Email:</Text>
        <TextInput keyboardType="email-address" textAlign="center" />
        <Text>Senha:</Text>
        <TextInput secureTextEntry={true} textAlign="center" />
        <Text>Esqueci a senha</Text>
        <Button title="Login"></Button>
      </View>
    </View>
  );
};

export default SigninForm;
