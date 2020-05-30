import React from "react";
import { Text, View } from "react-native";
import TodoItem from "./TodoItem";
import { FlatList } from "react-native-gesture-handler";

export default function TodoList(props) {
  // props.items: have all the items to render
  return (
    <View>
      <FlatList
        data={props.items}
        renderItem={({ item }) => (
          <TodoItem
            key={item.id}
            item={item}
            items={props.items}
            setitems={props.setitems}
          ></TodoItem>
        )}
      ></FlatList>
    </View>
  );
}
