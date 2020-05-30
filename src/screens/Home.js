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
          firstColor="#FF9800"
          secondColor="#F44336"
          img="https://images.vexels.com/media/users/3/145508/isolated/preview/7c0c6b80f2841aada0c2dfbb9f75bf1b-burning-fire-cartoon-by-vexels.png"
          title="Front Burner"
          handleonPress="FrontBurner"
          navigation={props.navigation}
          desc="The main focus"
        />
        <ListHeader
          firstColor="#2c3e50"
          secondColor="#3498db"
          img="https://image.flaticon.com/icons/png/512/98/98022.png"
          title="Back Burner"
          handleonPress="BackBurner"
          navigation={props.navigation}
          desc="For another time"
        />
        <ListHeader
          firstColor="#dce35b"
          secondColor="#45b649"
          img="https://i.ya-webdesign.com/images/medical-clipart-boarder-4.png"
          title="Vitamins"
          handleonPress="Vitamins"
          navigation={props.navigation}
          desc="Take daily"
        />
        <ListHeader
          firstColor="#bdc3c7"
          secondColor="#2c3e50"
          img="https://www.clipartmax.com/png/middle/217-2170119_colorful-cartoon-of-a-housewife-baking-bread-oven.png"
          title="Oven"
          handleonPress="Oven"
          navigation={props.navigation}
          desc="Give it time.."
        />
      </View>
    </NavigationContainer>
  );
}
