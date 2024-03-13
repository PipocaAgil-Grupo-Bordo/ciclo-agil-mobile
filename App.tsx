import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Router from "./src/routes";

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    Lora:require("./assets/fonts/Lora-Regular.ttf")
  })

  if(!loaded) {
    return null
  }

  return (
    <>
      <Router />
      <StatusBar style="auto" />
    </>
  );
}
