import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "@pages/Home";
import Calendar from "@pages/Calendar";
import Analytics from "@pages/Analytics";
import Articles from "@pages/Articles";
import Entypo from "react-native-vector-icons/Entypo";
import Feather from "react-native-vector-icons/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  const setDefaultIconStyle = (focused: boolean) => {
    return {
      backgroundColor: focused ? "#ff0000" : "transparent",
      borderRadius: 99
    };
  };

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
        // tabBarIcon: ({ color, size, focused }) => (
        //   <Entypo name="cycle" color={color} size={size} style={setDefaultIconStyle(focused)} />
        // )
      }}
    >
      <Tab.Group>
        <Tab.Screen
          name="Cycle"
          component={Home}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Entypo name="cycle" color={color} size={18} style={setDefaultIconStyle(focused)} />
            ),
            tabBarLabel: "Ciclo",
            tabBarIconStyle: { transform: [{ rotate: "45deg" }] }
          }}
        />
        <Tab.Screen
          name="Calendar"
          component={Calendar}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons
                name="calendar-month-outline"
                size={20}
                color={color}
                backgroundColor={focused ? "#ff0000" : "transparent"}
                style={setDefaultIconStyle(focused)}
              />
            ),
            tabBarLabel: "Calendário"
          }}
        />
        <Tab.Screen
          name="Analytics"
          component={Analytics}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Feather
                name="trending-up"
                color={color}
                size={15}
                style={setDefaultIconStyle(focused)}
              />
            ),
            tabBarLabel: "Análise"
          }}
        />
        <Tab.Screen
          name="Articles"
          component={Articles}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Feather
                name="book-open"
                color={color}
                size={15}
                style={setDefaultIconStyle(focused)}
              />
            ),
            tabBarLabel: "Conteúdo"
          }}
        />
      </Tab.Group>
    </Tab.Navigator>
  );
};

export default TabRoutes;
