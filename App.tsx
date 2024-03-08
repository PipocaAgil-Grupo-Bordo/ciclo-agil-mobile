import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Router from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
  });

  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  );
}
