import React from "react";
import TouchableScale from "react-native-touchable-scale"; // https://github.com/kohver/react-native-touchable-scale
import { ListItem } from "react-native-elements";
export default function ListHeader(props) {
  function handlePress() {
    props.navigation.navigate(props.handleonPress);
  }
  return (
    <ListItem
      Component={TouchableScale}
      friction={90} //
      tension={100} // These props are passed to the parent component (here TouchableScale)
      activeScale={0.95} //
      linearGradientProps={{
        colors: [props.firstColor, props.secondColor], //"#FF9800", "#F44336",
        start: { x: 1, y: 0 },
        end: { x: 0.2, y: 0 },
      }}
      leftAvatar={{
        rounded: true,
        source: {
          uri: props.img,
        },
      }}
      title={props.title}
      titleStyle={{ color: "white", fontWeight: "bold" }}
      subtitleStyle={{ color: "white" }}
      subtitle={props.desc}
      chevron={{ color: "white" }}
      onPress={handlePress}
    />
  );
}
