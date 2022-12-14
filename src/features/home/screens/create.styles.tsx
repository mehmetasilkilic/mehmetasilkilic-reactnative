import {
  Dimensions,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { TextInput, DarkTheme } from "react-native-paper";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

import type { CategoryProps } from "../components/categoryList.component";

const InputWidth = Dimensions.get("window").width - 32;

export const FormContainer = styled.View`
  padding-horizontal: ${(props) => props.theme.space[3]};
  align-items: center;
`;

export const Icon = styled(Ionicons).attrs((props) => ({
  color: props.theme.colors.text.primary,
}))``;

export const TitleWrapper = styled.View`
  padding-horizontal: ${(props) => props.theme.space[3]};
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding-bottom: 10px;
`;

export const InputDark = styled(TextInput).attrs({
  theme: DarkTheme,
})`
  width: ${InputWidth}px;
  background-color: #1a1d22;
  font-size: 18px;
  height: 50px;
`;

export const InputLight = styled(TextInput)`
  width: ${InputWidth}px;
  background-color: #ffffff;
  font-size: 18px;
  height: 50px;
`;

export const SubmitContainer = styled(TouchableOpacity)`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-bottom: ${!StatusBar.currentHeight ? "36px" : "16px"};
  padding-top: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.ui.inverse};
  border-top-left-radius: ${(props) => props.theme.space[3]};
  border-top-right-radius: ${(props) => props.theme.space[3]};
  align-items: center;
  justify-content: center;
`;

export const CategoryListContainer = styled.View``;

export const CategoryFlatList = styled(
  FlatList as new () => FlatList<CategoryProps>
)``;

export const CategoryContainer = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.ui.secondary};
  justify-content: center;
  height: 35px;
  margin-left: ${(props) => props.theme.space[2]};
  padding-horizontal: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[2]};
`;

export const SelectedCategoryContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  justify-content: center;
  height: 35px;
  margin-left: ${(props) => props.theme.space[2]};
  padding-horizontal: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[2]};
`;
