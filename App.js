// I moved the homepage to the src/screens folder
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/Home";
import FrontBurner from "./src/screens/FrontBurner";
import BackBurner from "./src/screens/BackBurner";
import Vitamins from "./src/screens/Vitamins";
import Oven from "./src/screens/Oven";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    FrontBurner: FrontBurner,
    BackBurner: BackBurner,
    Vitamins: Vitamins,
    Oven: Oven,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Task Burner",
    },
  }
);

export default createAppContainer(navigator);
