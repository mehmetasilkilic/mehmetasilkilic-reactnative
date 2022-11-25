import { AntDesign } from "@expo/vector-icons";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { ProductProps } from "./home.screen";

export const ProductList = styled(
  FlatList as new () => FlatList<ProductProps>
)``;

export const CreateButton = styled(TouchableOpacity)`
  padding: ${(props) => props.theme.space[2]};
  background-color: ${(props) => props.theme.colors.ui.inverse};
  position: absolute;
  bottom: ${(props) => props.theme.space[3]};
  right: ${(props) => props.theme.space[3]};
  border-radius: 50px;
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.ui.primary};
`;

export const Icon = styled(AntDesign).attrs((props) => ({
  color: props.theme.colors.text.inverse,
}))``;
