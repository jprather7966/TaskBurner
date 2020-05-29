import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import FrontBurner from "../screens/FrontBurner";
import BackBurner from "../screens/BackBurner";
import Vitamins from "../screens/Vitamins";
import Oven from "../screens/Oven";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "FrontBurner") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "BackBurner") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Vitamins") {
            iconName = focused ? "ios-list-box" : "ios-list";
          } else if (route.name === "Oven") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}>
      <Tab.Screen name='FrontBurner' component={FrontBurner} />
      <Tab.Screen name='BackBurner' component={BackBurner} />
      <Tab.Screen name='Vitamins' component={Vitamins} />
      <Tab.Screen name='Oven' component={Oven} />
    </Tab.Navigator>
  );
}
