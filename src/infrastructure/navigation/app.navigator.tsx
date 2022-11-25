import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";

import { Create } from "../../features/home/screens/create.screen";
import { Home } from "../../features/home/screens/home.screen";
import { ProductDetails } from "../../features/home/screens/productDetails.screen";

export type RootStackParams = {
  Home: undefined;
  Create: undefined;
  ProductDetails: {
    id: number;
  };
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const screenOptions = () => {
  return {
    headerShown: false,
  };
};

export const TabBarNavigator = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Home"
        screenOptions={screenOptions}
      >
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            title: "ProductDetails",
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        />
        <RootStack.Screen
          name="Create"
          component={Create}
          options={{
            title: "Create",
            ...TransitionPresets.SlideFromRightIOS,
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
