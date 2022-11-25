import { FlatList } from "react-native";
import styled from "styled-components/native";

import { CategoryProps } from "./categoryList.component";

export const CategoryFlatList = styled(
  FlatList as new () => FlatList<CategoryProps>
)`
  flex-grow: 0;
`;

export const CategoryContainer = styled.View`
  background-color: ${(props) => props.theme.colors.ui.primary};
  padding: ${(props) => props.theme.space[2]};
  margin-left: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.space[2]};
`;

export const SpacerHeader = styled.View`
  margin: ${(props) => props.theme.space[1]};
`;

export const SpacerFooter = styled.View`
  margin: ${(props) => props.theme.space[2]};
`;
