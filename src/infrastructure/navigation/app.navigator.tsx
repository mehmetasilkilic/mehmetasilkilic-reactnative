import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeStackParams } from "./home.navigator";

import { HomeScreenStack } from "./home.navigator";
import { Create } from "../../features/create/screens/create.screen";

export type RootStackParams = {
  Home: undefined;
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  Create: undefined;
  Product: {
    id: number;
  };
};

const RootStack = createBottomTabNavigator<RootStackParams>();

const screenOptions = () => {
  return {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: { display: "none" },
  };
};

export const TabBarNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="HomeStack"
        screenOptions={screenOptions}
      >
        <RootStack.Screen name="HomeStack" component={HomeScreenStack} />
        <RootStack.Screen name="Create" component={Create} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
