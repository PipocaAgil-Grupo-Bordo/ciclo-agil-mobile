import React from "react";
import SigninForm from "./SigninForm";
import Logo from "@components/Logo";
import { Sc } from "./style";
import useBackButtonExit from "@hooks/useBackButtonExit";

const Login: React.FC = () => {
  useBackButtonExit();

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
