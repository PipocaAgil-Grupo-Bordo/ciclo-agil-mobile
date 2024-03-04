import React from "react";
import { View } from "react-native";
import SigninForm from "./SigninForm";
import { LoginBox } from "./style";
import Logo from "../../components/Logo";


const Login: React.FC = () => {
  return (
    <LoginBox>
      <Logo/>
      <SigninForm />
    </LoginBox>
  );
};

export default Login;
