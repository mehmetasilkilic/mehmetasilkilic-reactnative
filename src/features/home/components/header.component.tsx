import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  toggleAppearance,
  toggleDarkMode,
  toggleSearch,
} from "../../../store/utils/utils";

import BlackLogo from "../../../../assets/upay-logo.png";
import WhiteLogo from "../../../../assets/upay-logo-2.png";

import { HeaderContainer, HeaderImage, Row, Button } from "./header.styles";

export const Header = () => {
  const dispatch = useAppDispatch();

  const appearance = useAppSelector((state) => state.utils.appearance);
  const darkMode = useAppSelector((state) => state.utils.darkMode);
  const search = useAppSelector((state) => state.utils.search);

  return (
    <HeaderContainer>
      <HeaderImage source={darkMode ? WhiteLogo : BlackLogo} />
      <Row>
        <Button onPress={() => dispatch(toggleAppearance())}>
          {appearance ? (
            <AntDesign
              name="appstore-o"
              size={24}
              color={darkMode ? "white" : "black"}
            />
          ) : (
            <MaterialCommunityIcons
              name="view-day-outline"
              size={25}
              color={darkMode ? "white" : "black"}
            />
          )}
        </Button>
        <Button onPress={() => dispatch(toggleDarkMode())}>
          <Ionicons
            name={darkMode ? "sunny-outline" : "moon-outline"}
            size={24}
            color={darkMode ? "white" : "black"}
          />
        </Button>
        <Button onPress={() => dispatch(toggleSearch())}>
          {search ? (
            <AntDesign
              name="close"
              size={24}
              color={darkMode ? "white" : "black"}
            />
          ) : (
            <AntDesign
              name="search1"
              size={24}
              color={darkMode ? "white" : "black"}
            />
          )}
        </Button>
      </Row>
    </HeaderContainer>
  );
};
