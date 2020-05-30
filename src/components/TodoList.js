import React from "react";
import { Text, View } from "react-native";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  // props.items: have all the items to render
  return (
    <View>
      {props.items.map((item) => (
        <TodoItem title={item} />
      ))}
    </View>
  );
}
