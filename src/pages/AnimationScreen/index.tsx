import { useRef } from "react";

import AnimatedSplashscreen from "@lottie/animated-splashscreen.json";
import { StatusBar } from "expo-status-bar";
import LottieView from "lottie-react-native";
import Animated from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

function AnimationScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onAnimationFinish = (_isCancelled) => {}
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) {
  const animation = useRef<LottieView>(null);

  return (
    <>
      <StatusBar translucent />
      <AnimatedLottieView
        ref={animation}
        style={{ flex: 1 }}
        resizeMode="cover"
        onAnimationFinish={onAnimationFinish}
        loop={false}
        autoPlay
        source={AnimatedSplashscreen}
      />
    </>
  );
}

export default AnimationScreen;
