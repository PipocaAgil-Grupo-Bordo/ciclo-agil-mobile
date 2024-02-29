import React from "react";
import { LogoBox, LogoImg } from "./style";
import { Image, View } from "react-native";

const Logo: React.FC = () => {
  return (
    <LogoBox>
      <LogoImg
        source={require("../../../assets/logo.png")}
        resizeMode="cover"
      ></LogoImg>
    </LogoBox>
  );
};

export default Logo;
