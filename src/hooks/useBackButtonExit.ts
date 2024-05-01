import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/core";
import { BackHandler } from "react-native";

/**
 * Prevent both OS and custom back buttons from going back.
 * When called, the app will be minimized instead.
 */
const useBackButtonExit = () => {
  useFocusEffect(
    useCallback(() => {
      // Handle the back button press event, exiting the app
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);

      // Cleanup to remove eventListener when the component unmounts
      return () => subscription.remove();
    }, [])
  );
};

export default useBackButtonExit;
