import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import EmailRequest from "./pages/ResetPassword/1-EmailRequest";
import { RootStackParamList } from "./types/routeType";
import CodeRequest from "./pages/ResetPassword/2-CodeRequest";
import NewPassword from "./pages/ResetPassword/3-NewPassword";

const Stack = createStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="EmailRequest" component={EmailRequest} />
        <Stack.Screen name="CodeRequest" component={CodeRequest} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
