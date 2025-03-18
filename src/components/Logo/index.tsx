import React from "react";

import LogoImage from "@images/logo.png";

import { Sc } from "./style";
import LogoImage from "@images/logo.svg";

/**
 * App logo
 */
function Logo() {
  // TODO: Polish the logo, as it is quite pixelated right now
  return (
    <Sc.Container>
      <Sc.IconWrapper>
        <LogoImage width={131} height={126} />
      </Sc.IconWrapper>
    </Sc.Container>
  );
}

export default Logo;
