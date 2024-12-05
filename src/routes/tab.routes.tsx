import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@pages/Home";
// import Calendar from "@pages/Calendar";
import Analytics from "@pages/Analytics";
import Articles from "@pages/Articles";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ColorScheme, FontScheme } from "@styles/globalStyles";
import AnnualCalendar from "@pages/AnualCalendar";
import MonthlyCalendar from "@pages/MonthlyCalendar";

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: ColorScheme.background.secondary,
          elevation: 0,
          borderTopWidth: 0
        },
        tabBarActiveTintColor: ColorScheme.accent.highlight,
        tabBarInactiveTintColor: ColorScheme.icon.idle,
        tabBarLabelStyle: {
          fontSize: 11,
          fontFamily: FontScheme.family.primary
        }
      }}
    >
      <Tab.Group>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => <Entypo name="cycle" color={color} size={size} />,
            tabBarLabel: "Ciclo",
            tabBarIconStyle: { transform: [{ rotate: "45deg" }] }
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={AnnualCalendar}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar-month-outline" size={size} color={color} />
            ),
            tabBarLabel: "Calendário"
          }}
        />
        <Tab.Screen
          name="Analytics"
          component={Analytics}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="trending-up" color={color} size={size} />
            ),
            tabBarLabel: "Análise"
          }}
        />
        <Tab.Screen
          name="Articles"
          component={Articles}
          options={{
            tabBarIcon: ({ color, size }) => <Feather name="book-open" color={color} size={size} />,
            tabBarLabel: "Conteúdo"
          }}
        />
        <Tab.Screen
        name="MonthlyCalendar"
        component={MonthlyCalendar}
        options={{
          tabBarButton: () => null,
        }}
      />
      </Tab.Group>
    </Tab.Navigator>
  );
}

export default TabRoutes;
