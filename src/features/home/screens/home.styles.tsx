import styled from "styled-components/native";
import { FlatList } from "react-native";

import { ProductProps } from "./home.screen";

export const ProductList = styled(
  FlatList as new () => FlatList<ProductProps>
)``;
