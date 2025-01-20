import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@pages/Home";
import Analytics from "@pages/Analytics";
import { FontScheme, NewColorScheme } from "@styles/globalStyles";
import AnnualCalendar from "@pages/AnualCalendar";
import MonthlyCalendar from "@pages/MonthlyCalendar";
import HomeIcon from "@icons/HomeIcon.svg";
import CalendarIcon from "@icons/CalendarIcon.svg";
import AnalyticsIcon from "@icons/AnalyticsIcon.svg";

const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingTop: 5,
          backgroundColor: NewColorScheme.background.white,
          shadowColor: "black",
          shadowOffset: { width: 0, height: -6 },
          shadowOpacity: 0.05,
          shadowRadius: 12,
          elevation: 10,
          height: 58,
          borderTopWidth: 0
        },
        tabBarActiveTintColor: NewColorScheme.accent.highlight,
        tabBarInactiveTintColor: NewColorScheme.icon.idle,
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
            tabBarIcon: ({ color, size }) => <HomeIcon width={size} height={size} color={color} />,
            tabBarLabel: "Home"
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={AnnualCalendar}
          options={{
            tabBarIcon: ({ color, size }) => (
              <CalendarIcon width={size} height={size} color={color} />
            ),
            tabBarLabel: "Calendário"
          }}
        />
        <Tab.Screen
          name="Analytics"
          component={Analytics}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AnalyticsIcon width={size} height={size} color={color} fill={"transparent"} />
            ),
            tabBarLabel: "Relatórios"
          }}
        />
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
