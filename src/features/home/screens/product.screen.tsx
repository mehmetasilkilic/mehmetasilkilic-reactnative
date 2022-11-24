import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParams } from "../../../infrastructure/navigation/app.navigator";

type Props = NativeStackScreenProps<RootStackParams, "Product">;

export const Product = ({ navigation }: Props) => {
  const close = () => navigation.pop();

  return (
    <View>
      <Text>Product</Text>
      <TouchableOpacity onPress={close}>
        <Text>Close</Text>
      </TouchableOpacity>
    </View>
  );
};
