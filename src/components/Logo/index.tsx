import React from "react";
import { Sc } from "./style";

function Logo() {
  return (
    <Sc.Container>
      <Sc.Icon source={require("@images/logo.png")} resizeMode="cover"></Sc.Icon>
    </Sc.Container>
  );
}

export default Logo;
