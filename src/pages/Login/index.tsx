import React from "react";
import SigninForm from "./SigninForm";
import Logo from "@components/Logo";
import { Sc } from "./style";
import useBackButtonExit from "@hooks/useBackButtonExit";
import PageContainer from "../../components/PageContainer";

function Login() {
  useBackButtonExit();

  return (
    <PageContainer
      style={{ backgroundColor: "#EEF7FF", paddingLeft: 0, paddingRight: 0, paddingTop: 0 }}
    >
      <Sc.Wrapper>
        <Logo />
        <SigninForm />
      </Sc.Wrapper>
    </PageContainer>
  );
}

export default Login;
