import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";

import { Home } from "../../features/home/screens/home.screen";
import { ProductDetails } from "../../features/home/screens/productDetails.screen";

export type HomeStackParams = {
  Home: undefined;
  ProductDetails: {
    id: number;
  };
};

const HomeStack = createNativeStackNavigator<HomeStackParams>();

export const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="ProductDetails" component={ProductDetails} />
    </HomeStack.Navigator>
  );
};
