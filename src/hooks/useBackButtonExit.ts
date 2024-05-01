import { useCallback } from "react";
import { useFocusEffect } from "@react-navigation/core";
import { BackHandler } from "react-native";

const useBackButtonExit = () => {
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => subscription.remove();
    }, [])
  );
};

export default useBackButtonExit;
