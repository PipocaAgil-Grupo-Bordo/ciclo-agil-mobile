import { Sc } from "./style";
import { StatusBar } from "expo-status-bar";

function HomeTopBackground() {
  return (
    <Sc.Container>
      <StatusBar style="light" translucent />
      <Sc.Icon source={require("@images/home-top-bg.png")} resizeMode="cover"></Sc.Icon>
    </Sc.Container>
  );
}

export default HomeTopBackground;
