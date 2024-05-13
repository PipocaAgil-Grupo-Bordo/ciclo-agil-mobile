import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import { TokenProvider } from "@context/useUserToken";
import { ProfileProvider } from "@context/useUserProfile";

const Router = () => {
  return (
    <TokenProvider>
      <ProfileProvider>
        <NavigationContainer>
          <StackRoutes />
        </NavigationContainer>
      </ProfileProvider>
    </TokenProvider>
  );
};

export default Router;
