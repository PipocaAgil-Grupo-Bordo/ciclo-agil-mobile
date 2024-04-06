import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import EmailRequest from "./pages/ResetPassword/1-EmailRequest";
import { RootStackParamList } from "@type/routeType";
import CodeRequest from "./pages/ResetPassword/2-CodeRequest";
import NewPassword from "./pages/ResetPassword/3-NewPassword";
import BackArrow from "@components/BackArrow";

const Stack = createStackNavigator<RootStackParamList>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerBackImage: () => <BackArrow />,
          headerShown: false,
          headerTitleAlign: "center",
          headerTitleStyle: { fontFamily: "Lora", fontSize: 24 },
          headerStyle: { backgroundColor: "#fafcff", shadowColor: "transparent" }
        }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="EmailRequest" component={EmailRequest} />
        <Stack.Screen
          options={{ headerShown: true, title: "Redefinir Senha" }}
          name="CodeRequest"
          component={CodeRequest}
        />
        <Stack.Screen
          options={{ headerShown: true, title: "Redefinir Senha" }}
          name="NewPassword"
          component={NewPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
