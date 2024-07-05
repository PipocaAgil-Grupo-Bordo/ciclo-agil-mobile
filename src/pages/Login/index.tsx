import React from "react";
import SigninForm from "./SigninForm";
import Logo from "@components/Logo";
import { Sc } from "./style";
import useBackButtonExit from "@hooks/useBackButtonExit";

function Login() {
  useBackButtonExit();

  return (
    <Sc.Container>
      <Sc.Wrapper>
        <Logo />
        <SigninForm />
      </Sc.Wrapper>
    </Sc.Container>
  );
}

export default Login;
