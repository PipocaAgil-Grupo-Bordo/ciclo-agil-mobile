import Login from "@pages/Login";
import LastPeriod from "@pages/MenstrualInitialSettings/2-LastPeriod";
import CycleDuration from "@pages/MenstrualInitialSettings/3-CycleDuration";
import Policy from "@pages/Policy";
import EmailRequest from "@pages/ResetPassword/1-EmailRequest";
import CodeRequest from "@pages/ResetPassword/2-CodeRequest";
import NewPassword from "@pages/ResetPassword/3-NewPassword";
import SignUp from "@pages/SignUp";
import Team from "@pages/Team";
// import OnboardingCarousel from "@pages/OnboardingCarousel";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./auth.router";
import TabRoutes from "./tab.routes";
import { RootStackParamList } from "./type";

const Stack = createStackNavigator<RootStackParamList>();

function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      {/* If user is logged in */}
      <Stack.Group>
        <Stack.Screen name="AuthLoader" component={AuthNavigator} />
        <Stack.Screen name="MainTabs" component={TabRoutes} options={{ headerShown: false }} />
      </Stack.Group>

      {/* If user has no account or has logged out */}
      <Stack.Group>
        <Stack.Screen name="Login" component={Login} />

        {/* Account creation plus its initial settings */}
        <Stack.Group>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Policy" component={Policy} />
          <Stack.Screen name="Team" component={Team} />
          {/* <Stack.Screen name="OnboardingCarousel" component={OnboardingCarousel} /> */}
          <Stack.Screen name="LastPeriod" component={LastPeriod} />
          <Stack.Screen name="CycleDuration" component={CycleDuration} />
        </Stack.Group>

        {/* Forgotten password */}
        <Stack.Group>
          <Stack.Screen name="EmailRequest" component={EmailRequest} />
          <Stack.Screen name="CodeRequest" component={CodeRequest} />
          <Stack.Screen name="NewPassword" component={NewPassword} />
        </Stack.Group>
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default StackRoutes;
