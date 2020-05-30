import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import Styles from "../Styles/Styles";
import InputModal from "../components/InputModal";
export default function FrontBurner() {
  const [items, setitems] = React.useState([
    {
      id: "0",
      title: "item one",
    },
    {
      id: "1",
      title: "item two",
    },
    {
      id: "2",
      title: "item three",
    },
  ]);
  return (
    <View style={Styles.container}>
      <View style={Styles.content}>
        <TodoList items={items} setitems={setitems} />
      </View>
    </View>
  );
}
