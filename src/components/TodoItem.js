import React from "react";
import { Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import Styles from "../Styles/Styles";
export default function TodoItem({ title }) {
  const [checked, setchecked] = React.useState(false);
  function handlePress(event) {
    setchecked((prevValue) => !prevValue);
  }
  return (
    <View style={Styles.item}>
      <CheckBox title={title} checked={checked} onPress={handlePress} />
    </View>
  );
}
