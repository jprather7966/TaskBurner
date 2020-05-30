import React from "react";
import { Text, View } from "react-native";
import AddNewItem from "../components/AddNewItem";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import ScreenStyles from "../Styles/ScreenStyles";
import AllTextStyles from "../Styles/AllTextStyles";
export default function Oven() {
  return (
    <View style={ScreenStyles.container}>
      <Text>Oven!</Text>
      <TodoList />
    </View>
  );
}
