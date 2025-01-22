import LottieView from "lottie-react-native";
import { useRef } from "react";
import { View, StatusBar } from "react-native";

function AnimationScreen({
  onAnimationFinish = (isCancelled) => {}
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) {
  const animation = useRef<LottieView>(null);

  return (
    <>
      <StatusBar hidden />
      <LottieView
        ref={animation}
        style={{ flex: 1 }}
        resizeMode="cover"
        onAnimationFinish={onAnimationFinish}
        loop={false}
        autoPlay
        source={require("@lottie/animated-splashscreen.json")}
      />
    </>
  );
}

export default AnimationScreen;
