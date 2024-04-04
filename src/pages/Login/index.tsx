import React from "react";
import SigninForm from "./SigninForm";
import Logo from "@components/Logo";
import { Sc } from "./style";

const Login: React.FC = () => {
  return (
    <Sc.Container>
      <Sc.Wrapper>
        <Logo />
        <SigninForm />
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default Login;
