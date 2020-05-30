import React from "react";
import { Text, View } from "react-native";
import Styles from "../Styles/Styles";
export default function TodoItem({ title }) {
  return (
    <View style={Styles.item}>
      <Text style={Styles.title}>{title}</Text>
    </View>
  );
}
