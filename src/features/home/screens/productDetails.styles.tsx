import { AntDesign } from "@expo/vector-icons";
import {
  TouchableOpacity,
  ScrollView,
  FlatList,
  StatusBar,
} from "react-native";
import styled from "styled-components/native";

export const ProductScrollViewContainer = styled.View`
  height: 350px;
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
  height: 100%;
`;

export const CloseContainer = styled(TouchableOpacity)`
  position: absolute;
  z-index: 1;
  right: ${(props) => props.theme.space[3]};
  top: ${StatusBar.currentHeight ? "44px" : "64px"}
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[1]};
  border-radius: 50px;
`;

export const Icon = styled(AntDesign).attrs((props) => ({
  color: props.theme.colors.text.primary,
}))``;

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
  margin-left: ${(props) => props.theme.space[3]};
`;

export const TitleContainer = styled.View`
  max-width: 70%;
`;

export const Spacer = styled.View`
  margin: ${(props) => props.theme.space[1]};
`;

export const DescriptionContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[3]};
`;
