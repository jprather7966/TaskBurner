import * as React from "react";
import { Text, View } from "react-native";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import Styles from "../Styles/Styles";
export default function BackBurner() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>BackBurner!</Text>
      <TodoList />
    </View>
  );
}
