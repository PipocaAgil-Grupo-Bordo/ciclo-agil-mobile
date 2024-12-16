import { Sc } from "./style";
import { StatusBar } from "expo-status-bar";

function HomeTopBackground() {
  return (
    <Sc.Container>
      <StatusBar style="auto" translucent />
      <Sc.Image source={require("@images/home-top-bg.png")} resizeMode="cover" />
    </Sc.Container>
  );
}

export default HomeTopBackground;
