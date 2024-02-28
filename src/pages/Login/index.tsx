import React from "react";
import { View } from "react-native";
import SigninForm from "./SigninForm";
import { LoginBox } from "./style";


const Login: React.FC = () => {
  return (
    <LoginBox>
      <SigninForm />
    </LoginBox>
  );
};

export default Login;
