import { View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParams } from "../../../infrastructure/navigation/app.navigator";

type Props = NativeStackScreenProps<RootStackParams, "Home">;

export const Home = ({ navigation }: Props) => {
  const goCreate = () => navigation.navigate("Create");
  const goProduct = () => navigation.navigate("Product", { id: 1 });

  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={goCreate}>
        <Text>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goProduct}>
        <Text>Product</Text>
      </TouchableOpacity>
    </View>
  );
};
