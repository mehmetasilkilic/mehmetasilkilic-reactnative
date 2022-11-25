import { Dimensions } from "react-native";
import styled from "styled-components/native";

const cardWidth = (Dimensions.get("window").width - 48) / 2;

export const ProductCardContainer = styled.View`
  width: ${cardWidth}px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: ${(props) => props.theme.space[3]};
  margin-left: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
  overflow: hidden;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 200px;
`;

export const PriceContainer = styled.View`
  margin-left: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const TitleContainer = styled.View`
  margin-horizontal: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[2]};
`;
