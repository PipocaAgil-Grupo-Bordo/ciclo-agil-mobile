import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "./type";
import { useTokenContext } from "@context/useUserToken";
import { secureStore } from "@utils/secureStoreHelper";
import { jwtDecode } from "jwt-decode";
import { decode, encode } from "base-64";
// @ts-ignore
import { tokenAuth } from "@utils/tokenAuthHelper";
import AnimationScreen from "@pages/AnimationScreen";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

function AuthNavigator() {
  const { accessToken, setRefreshToken, setAccessToken } = useTokenContext();
  const navigation = useNavigation<NavigationType>();
  const [loading, setLoading] = useState(true);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState<boolean>(false);

  useEffect(() => {
    /**
     * Fetch the access token and store it in the context and secureStore from expo
     */
    const fetchAccessToken = async () => {
      try {
        const newAccessToken = await secureStore.getToken("accessToken");
        const newRefreshToken = await secureStore.getToken("refreshToken");

        // tokenAuth.deleteTokens(setAccessToken, setRefreshToken); // Uncomment to log out (for debugging only)
        // Store the tokens in the context
        if (newRefreshToken !== null) {
          setRefreshToken(newRefreshToken);
        }
        if (newAccessToken !== null) {
          setAccessToken(newAccessToken);
        }

        // Set loading to false once tokens are handled
        setLoading(false);
      } catch (error) {
        console.log("Error on route: " + error);
        navigation.navigate("Login");
      }
    };

    fetchAccessToken();
  }, []);

  useEffect(() => {
    /**
     * After loading is finished, re-direct user to the correct screen based on whether they had previously logged in or not
     */
    if (!loading && splashAnimationFinished) {
      if (accessToken !== undefined) {
        const accessTokenPayload = jwtDecode(accessToken);

        // Match the payload expiry date format
        const currentTime = Math.floor(Date.now() / 1000);

        // Check if token has expired
        if (accessTokenPayload.exp && accessTokenPayload.exp < currentTime) {
          return navigation.navigate("Login");
        }

        return navigation.navigate("MainTabs");
      }

      navigation.navigate("Login");
    }
  }, [accessToken, loading, splashAnimationFinished]);

  return (
    <AnimationScreen
      onAnimationFinish={(isCancelled) => {
        if (!isCancelled) {
          setSplashAnimationFinished(true);
        }
      }}
    />
  );
}

export default AuthNavigator;
