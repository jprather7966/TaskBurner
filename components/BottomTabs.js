import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FrontBurner from "../screens/FrontBurner";
import BackBurner from "../screens/BackBurner";
import Vitamins from "../screens/Vitamins";
import Oven from "../screens/Oven";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='FrontBurner' component={FrontBurner} />
      <Tab.Screen name='BackBurner' component={BackBurner} />
      <Tab.Screen name='Vitamins' component={Vitamins} />
      <Tab.Screen name='Oven' component={Oven} />
    </Tab.Navigator>
  );
}
