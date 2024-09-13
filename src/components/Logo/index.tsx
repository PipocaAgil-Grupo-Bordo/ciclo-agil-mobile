import React from "react";
import { Sc } from "./style";

/**
 * App logo
 */
function Logo() {
  // TODO: Polish the logo, as it is quite pixelated right now
  return (
    <Sc.Container>
      <Sc.Icon source={require("@images/logo.png")} resizeMode="cover"></Sc.Icon>
    </Sc.Container>
  );
}

export default Logo;
