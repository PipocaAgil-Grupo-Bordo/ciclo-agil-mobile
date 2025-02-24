import React from "react";

import Logo from "@components/Logo";
import useBackButtonExit from "@hooks/useBackButtonExit";
import { NewColorScheme } from "@styles/globalStyles";

import SigninForm from "./SigninForm";
import { Sc } from "./style";
import PageContainer from "../../components/PageContainer";

function Login() {
  useBackButtonExit();

  return (
    <PageContainer
      style={{
        backgroundColor: `${NewColorScheme.background.primary}`,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0
      }}
    >
      <Sc.Wrapper>
        <Logo />
        <SigninForm />
      </Sc.Wrapper>
    </PageContainer>
  );
}

export default Login;
