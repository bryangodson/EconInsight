import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();
import Home from "./home";
import Learn from "./learn";
import Events from "./events";
import Tracker from "./tracker";
import { colors } from "../assets/defaults";
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name == "Home") {
            iconName = "home";
          } else if (route.name == "Learn") {
            iconName = "book";
          } else if (route.name == "Events") {
            iconName = "calendar";
          } else {
            iconName = "pulse";
          }
          return (
            <Octicons
              name={iconName}
              size={(size = focused ? 20 : 18)}
              color={color}
            />
          );
        },
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarInactiveTintColor: colors.black,
        tabBarLabelStyle: {
          paddingBottom: 4,
          fontFamily: "quickSemiBold",
        },
      })}
      backBehavior="history"
      initialRouteName="Home"
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Learn" component={Learn} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Tracker" component={Tracker} />
    </Tab.Navigator>
  );
};

export default Tabs;
