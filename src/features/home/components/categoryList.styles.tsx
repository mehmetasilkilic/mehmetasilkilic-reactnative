import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { CategoryProps } from "./categoryList.component";

export const CategoryFlatListContainer = styled.View`
  height: 35px;
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const CategoryFlatList = styled(
  FlatList as new () => FlatList<CategoryProps>
)``;

export const SelectedCategoryContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.tertiary};
  justify-content: center;
  height: 35px;
  margin-left: ${(props) => props.theme.space[2]};
  padding-horizontal: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[2]};
`;

export const CategoryContainer = styled(TouchableOpacity)`
  background-color: ${(props) => props.theme.colors.ui.primary};
  justify-content: center;
  height: 35px;
  margin-left: ${(props) => props.theme.space[2]};
  padding-horizontal: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[2]};
`;

export const SpacerHeader = styled.View`
  margin: ${(props) => props.theme.space[1]};
`;

export const SpacerFooter = styled.View`
  margin: ${(props) => props.theme.space[2]};
`;
