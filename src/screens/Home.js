import * as React from "react";
import { Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Header, ListItem } from "react-native-elements";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ListHeader from "../components/ListHeader";
import FrontBurner from "../screens/FrontBurner";
import Styles from "../Styles/Styles";

export default function Home(props) {
  return (
    <NavigationContainer>
      <View style={{ flex: 1, backgroundColor: "#1b262c" }}>
        <ListHeader
          firstColor='#FF9800'
          secondColor='#F44336'
          img='https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          title='Front Burner'
          handleonPress='FrontBurner'
          navigation={props.navigation}
        />
        <ListHeader
          firstColor='#2c3e50'
          secondColor='#3498db'
          img='https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          title='Back Burner'
          handleonPress='BackBurner'
          navigation={props.navigation}
        />
        <ListHeader
          firstColor='#dce35b'
          secondColor='#45b649'
          img='https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          title='Vitamins'
          handleonPress='Vitamins'
          navigation={props.navigation}
        />
        <ListHeader
          firstColor='#bdc3c7'
          secondColor='#2c3e50'
          img='https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          title='Oven'
          handleonPress='Oven'
          navigation={props.navigation}
        />
      </View>
    </NavigationContainer>
  );
}
