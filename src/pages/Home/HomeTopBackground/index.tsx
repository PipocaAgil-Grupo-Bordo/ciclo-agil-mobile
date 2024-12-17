import { Sc } from "./style";
import { StatusBar } from "expo-status-bar";

function HomeTopBackground() {
  return (
    <Sc.Container>
      <Sc.Image source={require("@images/home-top-bg.png")} resizeMode="cover" />
    </Sc.Container>
  );
}

export default HomeTopBackground;
