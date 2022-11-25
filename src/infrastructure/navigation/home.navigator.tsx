import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";

import { Home } from "../../features/home/screens/home.screen";
import { Product } from "../../features/home/screens/product.screen";

export type HomeStackParams = {
  Home: undefined;
  Product: {
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
      <HomeStack.Screen name="Product" component={Product} />
    </HomeStack.Navigator>
  );
};
