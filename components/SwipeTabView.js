import * as React from "react";
import { View, StyleSheet, Dimensions, StatusBar } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import FrontBurner from "../screens/FrontBurner";
import BackBurner from "../screens/BackBurner";
import Vitamins from "../screens/Vitamins";
import Oven from "../screens/Oven";

const initialLayout = { width: Dimensions.get("window").width };

export default function SwipeTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "third", title: "Third" },
    { key: "fourth", title: "Fourth" },
  ]);

  const renderScene = SceneMap({
    first: FrontBurner,
    second: BackBurner,
    third: Vitamins,
    fourth: Oven,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      tabBarPosition={"bottom"}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  scene: {
    flex: 1,
  },
});
