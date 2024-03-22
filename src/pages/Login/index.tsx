import React from "react";
import SigninForm from "./SigninForm";
import Logo from "../../components/Logo";
import { StyledLoginContainer, StyledLoginWrapper } from "./style";

const Login: React.FC = () => {
  return (
    <StyledLoginContainer>
      <StyledLoginWrapper>
        <Logo />
        <SigninForm />
      </StyledLoginWrapper>
    </StyledLoginContainer>
  );
};

export default Login;
