import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./components/BottomTabs";

export default function App() {
  return (
    <NavigationContainer>

        <BottomTabs />
      
    </NavigationContainer>
  );
}
