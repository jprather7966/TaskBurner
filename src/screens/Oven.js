import * as React from "react";
import { Text, View } from "react-native";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import Styles from "../Styles/Styles";

export default function Oven() {
  return (
    <View style={ScreenStyles.container}>
      <Text>Oven!</Text>
      <TodoList />
    </View>
  );
}