import { View, Text, TouchableOpacity } from "react-native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { RootStackParams } from "../../../infrastructure/navigation/app.navigator";

type Props = BottomTabScreenProps<RootStackParams, "Create">;

export const Create = ({ navigation }: Props) => {
  const goHome = () => navigation.navigate("HomeStack", { screen: "Home" });

  return (
    <View>
      <Text>Create</Text>
      <TouchableOpacity onPress={goHome}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};
