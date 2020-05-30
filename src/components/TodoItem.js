import React from "react";
import { Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import Styles from "../Styles/Styles";
export default function TodoItem({ item, items, setitems }) {
  const [checked, setchecked] = React.useState(false);
  function handlePress() {
    setchecked((prevValue) => !prevValue);
  }
  function handleLongPress() {
    setitems(items.filter((removeitem) => removeitem !== item));
  }
  return (
    <View style={Styles.item}>
      <CheckBox
        title={item.title}
        checked={checked}
        onPress={handlePress}
        onLongPress={handleLongPress}
      />
    </View>
  );
}
