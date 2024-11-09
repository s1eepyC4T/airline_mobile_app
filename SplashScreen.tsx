import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./App"; // Ensure this path is correct

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, "Splash">;

const SplashScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToLogin}>
      <Image
        source={require("C:/Users/User/my_app/myairline/images/swipe.png")} // Replace with your image path
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default SplashScreen;
