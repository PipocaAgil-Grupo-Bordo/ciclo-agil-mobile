import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@pages/Home";
import Calendar from "@pages/Calendar";
import Analytics from "@pages/Analytics";
import Articles from "@pages/Articles";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ColorScheme, FontScheme } from "@styles/globalStyles";
import { View } from "react-native";
import { GeneralColors } from "@styles/colors";

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: ColorScheme.background.secondary,
          elevation: 0,
          borderTopWidth: 0,
          height: 60
        },
        tabBarActiveTintColor: ColorScheme.accent.highlight,
        tabBarInactiveTintColor: ColorScheme.icon.idle,
        tabBarLabelStyle: {
          paddingBottom: 4,
          fontSize: 11,
          fontFamily: FontScheme.family.primary
        }
      }}
    >
      <Tab.Group>
        <Tab.Screen
          name="Cycle"
          component={Home}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View style={{
                backgroundColor: focused ? GeneralColors.primary[300] : "transparent",
                borderRadius: 25,
                padding: 4,
              }}>
                <Entypo name="cycle" color={color} size={size} />
              </View>
            ),
            tabBarLabel: "Ciclo",
            tabBarIconStyle: { transform: [{ rotate: "45deg" }] }
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View style={{
                backgroundColor: focused ? GeneralColors.primary[300] : "transparent",
                borderRadius: 25,
                padding: 4,
              }}>
                <MaterialCommunityIcons name="calendar-month-outline" size={size} color={color} />
              </View>
            ),
            tabBarLabel: "Calendário"
          }}
        />
        <Tab.Screen
          name="Analytics"
          component={Analytics}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View style={{
                backgroundColor: focused ? GeneralColors.primary[300] : "transparent",
                borderRadius: 25,
                padding: 4,
              }}>
                <Feather name="trending-up" color={color} size={size} />
              </View>
            ),
            tabBarLabel: "Análise"
          }}
        />
        <Tab.Screen
          name="Articles"
          component={Articles}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View style={{
                backgroundColor: focused ? GeneralColors.primary[300] : "transparent",
                borderRadius: 25,
                padding: 4,
              }}>
                <Feather name="book-open" color={color} size={size} />
              </View>
            ),
            tabBarLabel: "Conteúdo"
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

export default TabRoutes;
