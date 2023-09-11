import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Blog",
    },
  }
);

const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
