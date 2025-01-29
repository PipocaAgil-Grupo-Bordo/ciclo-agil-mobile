import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import Router from "@routes/index";
import React from "react";

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontserratMedium: require("./assets/fonts/Montserrat-Medium.ttf"),
    MontserratSemiBold: require("./assets/fonts/Montserrat-SemiBold.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    Lora: require("./assets/fonts/Lora-Regular.ttf"),
    LoraMedium: require("./assets/fonts/Lora-Medium.ttf"),
    LoraSemiBold: require("./assets/fonts/Lora-SemiBold.ttf")
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Router />
      <StatusBar style="auto" backgroundColor="#fafcff" />
    </>
  );
}
