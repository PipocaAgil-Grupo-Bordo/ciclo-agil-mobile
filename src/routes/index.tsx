import { NavigationContainer } from "@react-navigation/native";
import StackRoutes from "./stack.routes";
import { TokenProvider } from "@context/useUserToken";

const Router = () => {
  return (
    <TokenProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </TokenProvider>
  );
};

export default Router;
