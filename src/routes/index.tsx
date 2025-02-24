import { TokenProvider } from "@context/useUserToken";
import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from "./stack.routes";

function Router() {
  return (
    <TokenProvider>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </TokenProvider>
  );
}

export default Router;
