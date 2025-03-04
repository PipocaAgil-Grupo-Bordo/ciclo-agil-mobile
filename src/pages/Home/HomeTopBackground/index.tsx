import Background from "@images/home-top-bg.png";

import { Sc } from "./style";

function HomeTopBackground() {
  return (
    <Sc.Container>
      <Sc.Image source={Background} resizeMode="cover" />
    </Sc.Container>
  );
}

export default HomeTopBackground;
