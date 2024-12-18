import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@pages/Home";
// import Calendar from "@pages/Calendar";
import Analytics from "@pages/Analytics";
// // import Articles from "@pages/Articles";
// import Entypo from "react-native-vector-icons/Entypo";
// import Feather from "react-native-vector-icons/Feather";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ColorScheme, FontScheme } from "@styles/globalStyles";
// import { View } from "react-native";
// import { GeneralColors } from "@styles/colors";
import AnnualCalendar from "@pages/AnualCalendar";
import MonthlyCalendar from "@pages/MonthlyCalendar";
import HomeIcon from "../../assets/icons/HomeIcon.svg";
import CalendarIcon from "../../assets/icons/CalendarIcon.svg";
import AnalyticsIcon from "../../assets/icons/AnalyticsIcon.svg";
// import TesteIcon from "../../assets/icons/TesteIcon.svg";

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 5,
          backgroundColor: ColorScheme.background.white,
          shadowColor: "black",
          shadowOffset: { width: 0, height: -6 },
          shadowOpacity: 0.05,
          shadowRadius: 12,
          elevation: 10,
          height: 60,
          borderTopWidth: 0
        },
        tabBarActiveTintColor: ColorScheme.accent.highlight,
        tabBarInactiveTintColor: ColorScheme.icon.idle,
        tabBarLabelStyle: {
          paddingBottom: 5,
          fontSize: 12,
          fontFamily: FontScheme.family.primary
        }
      }}
    >
      <Tab.Group>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <HomeIcon width={size} height={size} fill={focused ? "#B065E7" : color} />
            ),
            tabBarLabel: "Home"
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={AnnualCalendar}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <CalendarIcon width={size} height={size} fill={focused ? "#B065E7" : color} />
            ),
            tabBarLabel: "Calendário"
          }}
        />
        <Tab.Screen
          name="Analytics"
          component={Analytics}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AnalyticsIcon width={size} height={size} fill={color} />
            ),
            tabBarLabel: "Relatórios"
          }}
        />
        {/* <Tab.Screen
          name="Articles"
          component={Articles}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  backgroundColor: focused ? GeneralColors.primary[300] : "transparent",
                  borderRadius: 25,
                  padding: 4
                }}
              >
                <Feather name="book-open" color={color} size={size} />
              </View>
            ),
            tabBarLabel: "Conteúdo"
          }}
        /> */}
        <Tab.Screen
          name="MonthlyCalendar"
          component={MonthlyCalendar}
          options={{
            tabBarButton: () => null
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
}

export default TabRoutes;
