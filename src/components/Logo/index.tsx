import React from "react";
import { StyledLogoContainer, StyledLogo } from "./style";

const Logo: React.FC = () => {
  return (
    <StyledLogoContainer>
      <StyledLogo source={require("@images/logo.png")} resizeMode="cover"></StyledLogo>
    </StyledLogoContainer>
  );
};

export default Logo;
