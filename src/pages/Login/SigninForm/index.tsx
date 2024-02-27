import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

// import { Container } from './styles';

const SigninForm: React.FC = () => {
  return (
    <View>
      <View >
        <Text style={{ fontFamily: "Montserrat" }}>Email:</Text>
        <TextInput keyboardType="email-address" textAlign="center" />
        <Text style={{ fontFamily: "Montserrat" }}>Senha:</Text>
        <TextInput secureTextEntry={true} textAlign="center" />
        <Text style={{ fontFamily: "Montserrat" }}>Esqueci a senha</Text>
        <TouchableOpacity>
          <Text style={{ fontFamily: "Montserrat" }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SigninForm;
