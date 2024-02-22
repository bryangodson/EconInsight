import "react-native-gesture-handler";
import { useEffect, useCallback } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Onboard from "./screens/onboard";
import Profile from "./screens/profile";
import Settings from "./screens/settings";
import Tabs from "./screens/tabs";
import About from "./screens/about";
import Register from "./screens/register";
import * as NavigationBar from "expo-navigation-bar";
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const config = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync("#fff");
    NavigationBar.setVisibilityAsync("hidden");
    NavigationBar.setBehaviorAsync("overlay-swipe");
  }, []);
  const [fontsLoaded, fontError] = useFonts({
    quickBold: require("./assets/fonts/Quicksand-Bold.otf"),
    quickMedium: require("./assets/fonts/Quicksand-Medium.otf"),
    quickLight: require("./assets/fonts/Quicksand-Light.otf"),
    quickSemiBold: require("./assets/fonts/Quicksand-SemiBold.otf"),
    quickRegular: require("./assets/fonts/Quicksand-Regular.otf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Onboard"
        screenOptions={{
          headerShown: false,
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      >
        <Stack.Screen name="Onboard" component={Onboard} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
