import LottieView from "lottie-react-native";
import { useRef } from "react";
import Animated from "react-native-reanimated";

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

function AnimationScreen({
  onAnimationFinish = (isCancelled) => {}
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) {
  const animation = useRef<LottieView>(null);

  return (
    <AnimatedLottieView
      ref={animation}
      style={{ flex: 1 }}
      resizeMode="cover"
      onAnimationFinish={onAnimationFinish}
      loop={false}
      autoPlay
      source={require("@lottie/animated-splashcreen.json")}
    />
  );
}

export default AnimationScreen;
