import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleAppearance } from "../../../store/utils/utils";

import BlackLogo from "../../../../assets/upay-logo.png";

import { HeaderContainer, HeaderImage, Row, Button } from "./header.styles";

export const Header = () => {
  const dispatch = useAppDispatch();

  const appearance = useAppSelector((state) => state.utils.appearance);

  return (
    <HeaderContainer>
      <HeaderImage source={BlackLogo} />
      <Row>
        <Button onPress={() => dispatch(toggleAppearance())}>
          {appearance ? (
            <AntDesign name="appstore-o" size={24} color="black" />
          ) : (
            <MaterialCommunityIcons
              name="view-day-outline"
              size={25}
              color="black"
            />
          )}
        </Button>
        <Button>
          <Ionicons name="sunny-outline" size={24} color="black" />
          {/* moon-outline */}
        </Button>
        <Button>
          <AntDesign name="search1" size={24} color="black" />
        </Button>
      </Row>
    </HeaderContainer>
  );
};
