import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "./type";
import { ActivityIndicator, Text, View } from "react-native";
import { useTokenContext } from "@context/useToken";
import { secureStore } from "@utils/secureStore";
import { jwtDecode } from "jwt-decode";
import { decode, encode } from "base-64";

if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}

const AuthNavigator: React.FC = () => {
  const { access, setRefresh, setAccess } = useTokenContext();
  const navigation = useNavigation<NavigationType>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAccessToken = async () => {
      try {
        const accessToken = await secureStore.getToken("accessToken");
        const refreshToken = await secureStore.getToken("refreshToken");

        // await secureStore.deleteToken("accessToken"); // Uncomment to remove token for debugging only
        // await secureStore.deleteToken("refreshToken"); // Uncomment to remove token for debugging only

        // Store the tokens in the context
        if (refreshToken !== null) {
          setRefresh(refreshToken);
        }
        if (accessToken !== null) {
          setAccess(accessToken);
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
    if (!loading) {
      if (access !== undefined) {
        const accessTokenPayload = jwtDecode(access);

        // Match the payload expiry date format
        const currentTime = Math.floor(Date.now() / 1000);

        // Check if token has expired
        if (accessTokenPayload.exp && accessTokenPayload.exp < currentTime) {
          return navigation.navigate("Login");
        }

        return navigation.navigate("Home");
      }

      navigation.navigate("Login");
    }
  }, [access, loading]);

  return (
    <View
      style={{ backgroundColor: "#000", justifyContent: "center", alignItems: "center", flex: 1 }}
    >
      <ActivityIndicator size={"large"} color={"#fff"} />
    </View>
  );
};

export default AuthNavigator;
