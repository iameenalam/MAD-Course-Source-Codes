import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  const screens = [
    { name: "Props", label: "Props" },
    { name: "Hooks", label: "Hooks" },
    { name: "User Profile App", label: "User Profile App" },
    { name: "FlatList", label: "FlatList" },
    { name: "To-do List App", label: "To-do List App" },
    { name: "Forms", label: "Forms" },
    { name: "Registration Form", label: "Registration Form" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>MAD CODES RESULTS</Text>
      {screens.map((screen, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(screen.name)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{screen.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  button: {
    width: "80%",
    paddingVertical: 15,
    backgroundColor: "#007bff",
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
