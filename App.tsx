import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Router from "src/routes";

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"), // Font-weight: 400 and 500
    Lora: require("./assets/fonts/Lora.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-SemiBold.ttf"), // Font-weight: 600
    MontserratExtraBold: require("./assets/fonts/Montserrat-Bold.ttf")
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  );
}
