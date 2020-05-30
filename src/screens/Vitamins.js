import * as React from "react";
import { Text, View } from "react-native";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import Styles from "../Styles/Styles";

export default function Vitamins() {
  return (
    <View style={ScreenStyles.container}>
      <Text>Vitamins!</Text>
      <TodoList />
    </View>
  );
}
