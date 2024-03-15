import React from "react";
import { StyleSheet, View } from "react-native";
import SigninForm from "./SigninForm";
import Logo from "../../components/Logo";
import { StyledLoginContainer } from "./style";

const Login: React.FC = () => {
  return (
    <StyledLoginContainer>
      <Logo />
      <SigninForm />
    </StyledLoginContainer>
  );
};

export default Login;
