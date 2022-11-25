import { TouchableOpacity } from "react-native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utils/safeArea.component";

import { RootStackParams } from "../../../infrastructure/navigation/app.navigator";

type Props = BottomTabScreenProps<RootStackParams, "Create">;

export const Create = ({ navigation }: Props) => {
  const goHome = () => navigation.navigate("HomeStack", { screen: "Home" });

  return (
    <SafeArea>
      <Text variant="label">Create</Text>
      <TouchableOpacity onPress={goHome}>
        <Text variant="label">Home</Text>
      </TouchableOpacity>
    </SafeArea>
  );
};
