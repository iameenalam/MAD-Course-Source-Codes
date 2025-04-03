import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import Hooks from "../screens/2.Hooks";
import Props from "../screens/1.Props";
import UserProfileApp from "../screens/3.UserProfileApp";
import FlatListt from "../screens/4.FlatList";
import TodoApp from "../screens/5.TodoApp";
import Forms from "../screens/6.Forms";
import RegistrationForm from "../screens/7. RegistrationForm";
import UniTournamentForm from "../screens/8. UniTournamentForm";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Props" component={Props} />
        <Stack.Screen name="Hooks" component={Hooks} />
        <Stack.Screen name="User Profile App" component={UserProfileApp} />
        <Stack.Screen name="FlatList" component={FlatListt} />
        <Stack.Screen name="To-do List App" component={TodoApp} />
        <Stack.Screen name="Forms" component={Forms} />
        <Stack.Screen name="Registration Form" component={RegistrationForm} />
        <Stack.Screen name="Sports Tournament Registration Form" component={UniTournamentForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
