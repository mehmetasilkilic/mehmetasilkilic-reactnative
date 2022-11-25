import { AntDesign, Ionicons } from "@expo/vector-icons";

import BlackLogo from "../../../../assets/upay-logo.png";

import { HeaderContainer, HeaderImage, Row, Button } from "./header.styles";

export const Header = () => (
  <HeaderContainer>
    <HeaderImage source={BlackLogo} />
    <Row>
      <Button>
        <AntDesign name="appstore-o" size={24} color="black" />
        {/* <MaterialCommunityIcons
          name="view-day-outline"
          size={30}
          color="black"
        /> */}
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
