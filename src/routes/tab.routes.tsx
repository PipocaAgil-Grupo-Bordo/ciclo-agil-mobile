import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@pages/Home";
import Calendar from "@pages/Calendar";
import Analytics from "@pages/Analytics";
import Articles from "@pages/Articles";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#eef3fc",
          elevation: 0,
          borderTopWidth: 0
        },
        tabBarActiveTintColor: "#8E37C9",
        tabBarInactiveTintColor: "rgba(65, 67, 71, 0.75)",
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: "Montserrat"
        }
      }}
    >
      <Tab.Group>
        <Tab.Screen
          name="Cycle"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => <Entypo name="cycle" color={color} size={size} />,
            tabBarLabel: "Ciclo",
            tabBarIconStyle: { transform: [{ rotate: "45deg" }] }
          }} />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar-month-outline" size={size} color={color} />
            ),
            tabBarLabel: "Calendário"
          }} />
        <Tab.Screen
          name="Analytics"
          component={Analytics}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="trending-up" color={color} size={size} />
            ),
            tabBarLabel: "Análise"
          }} />
        <Tab.Screen
          name="Articles"
          component={Articles}
          options={{
            tabBarIcon: ({ color, size }) => <Feather name="book-open" color={color} size={size} />,
            tabBarLabel: "Conteúdo"
          }} />
      </Tab.Group>
    </Tab.Navigator>
  );
}

export default TabRoutes;
