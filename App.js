import * as React from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Header, ListItem } from "react-native-elements";
import ListHeader from "./src/components/ListHeader";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FrontBurner from "./src/screens/FrontBurner";
import Styles from "./src/Styles/Styles";

export default function App() {
  function handlePress(event) {
    navigation.navigate("Front Burner");
  }

  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: "#1b262c" }}>
        <Header
          centerComponent={{ text: "TaskBurner", style: { color: "#fff" } }}
          containerStyle={{
            backgroundColor: "#0f4c75",
            justifyContent: "space-around",
          }}
        />
        <ListHeader
          firstColor='#FF9800'
          secondColor='#F44336'
          img='https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          title='Front Burner'
          onPress={handlePress}
        />
        <ListHeader
          firstColor='#2c3e50'
          secondColor='#3498db'
          img='https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          title='Back Burner'
          onPress={handlePress}
        />
        <ListHeader
          firstColor='#dce35b'
          secondColor='#45b649'
          img='https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          title='Vitamins'
          onPress={handlePress}
        />
        <ListHeader
          firstColor='#bdc3c7'
          secondColor='#2c3e50'
          img='https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          title='Oven'
          onPress={handlePress}
        />
      </View>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Front Burner' component={FrontBurner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
