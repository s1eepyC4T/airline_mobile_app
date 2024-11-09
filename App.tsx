// App.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import Login from "./Login";
import Signup from "./Signup";
import FlightSearch from "./FlightSearch";

export type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
  Signup: undefined;
  FlightSearch: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="FlightSearch" component={FlightSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
