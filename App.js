import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./components/BottomTabs";
import SwipeTabView from "./components/SwipeTabView";

export default function App() {
  return (
    <NavigationContainer>
      <SwipeTabView />
    </NavigationContainer>
  );
}
