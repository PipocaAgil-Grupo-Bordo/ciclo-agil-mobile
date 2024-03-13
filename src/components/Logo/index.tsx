import React from "react";
import { LogoBox, LogoImg } from "./style";

const Logo: React.FC = () => {
  return (
    <LogoBox>
      <LogoImg source={require("../../../assets/logo.png")} resizeMode="cover"></LogoImg>
    </LogoBox>
  );
};

export default Logo;
