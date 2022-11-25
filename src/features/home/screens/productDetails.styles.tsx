import {
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
  Platform,
} from "react-native";
import styled from "styled-components/native";

const ScrollViewHeight = Dimensions.get("window").height - 350;

const isIos = Platform.OS === "ios";

export const ProductScrollViewContainer = styled.View`
  height: ${ScrollViewHeight}px;
  border-top-left-radius: ${(props) => props.theme.space[3]};
  border-top-right-radius: ${(props) => props.theme.space[3]};
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.ui.primary};
`;

export const ProductScrollView = styled(ScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    paddingBottom: 16,
  },
})``;

export const ProductImage = styled.Image`
  width: 100%;
  height: 400px;
`;

export const CloseContainer = styled(TouchableOpacity)`
  position: absolute;
  z-index: 1;
  right: ${(props) => props.theme.space[3]};
  top: ${isIos ? "64px" : "44px"}
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[1]};
  border-radius: 50px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.theme.space[3]};
`;

export const CategoryFlatList = styled(FlatList)`
  flex-grow: 0;
`;

export const CategoryContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[2]};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.text.primary};
`;

export const Spacer = styled.View`
  margin: ${(props) => props.theme.space[1]};
`;

export const DescriptionContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[3]};
`;
