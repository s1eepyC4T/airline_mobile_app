import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

const FlightSearch: React.FC = () => {
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSearch = () => {
    console.log("Search clicked");
  };

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  return (
    <ImageBackground 
      source={require("C:\Users\User\my_app\myairline\images\swipe (4).png")}  // Replace with the path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="Departure date"
            value={departureDate}
            onChangeText={setDepartureDate}
          />
          <TextInput
            style={styles.input}
            placeholder="Return date"
            value={returnDate}
            onChangeText={setReturnDate}
          />
        </View>

        <View style={styles.row}>
          <TextInput
            style={styles.input}
            placeholder="From"
            value={from}
            onChangeText={setFrom}
          />
          <TextInput
            style={styles.input}
            placeholder="To"
            value={to}
            onChangeText={setTo}
          />
          <TouchableOpacity style={styles.centerButton} onPress={handleSwap}>
            <Text style={styles.centerButtonText}>⮂</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>My Booking</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",  // Adjusts the image size to cover the screen
  },
  container: {
    flex: 1,
    padding: 16,
    marginTop: 45,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Slightly transparent white background
    textAlign: "center",
  },
  centerButton: {
    position: "absolute",
    left: "50%",
    transform: [{ translateX: -20 }],
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e53535",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  centerButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: "#e53535",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    position: "absolute",
    bottom: 15,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: "#e53535",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default FlightSearch;
