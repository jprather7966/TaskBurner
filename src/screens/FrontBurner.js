import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import TodoItem from "../components/TodoItem";
import TodoList from "../components/TodoList";
import Styles from "../Styles/Styles";
import { Header, Image, CheckBox } from "react-native-elements";

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
    <View style={{ flex: 1, backgroundColor: "#1b262c" }}>
      <Header
        centerComponent={{
          text: "FrontBurner",
          style: { fontSize: 25, color: "#fff", paddingBottom: 25 },
        }}
        placement="left"
        linearGradientProps={{
          colors: ["#FF9800", "#F44336"], //"#FF9800", "#F44336",
          start: { x: 1, y: 0 },
          end: { x: 0.2, y: 0 },
        }}
      />
      <View style={Styles.container}>
        <View style={Styles.content}>
          <TodoList items={items} setitems={setitems} />
        </View>
      </View>
    </View>
  );
}
