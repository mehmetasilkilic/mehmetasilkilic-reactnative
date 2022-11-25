import { Dimensions } from "react-native";
import styled from "styled-components/native";

const cardWidth = Dimensions.get("window").width - 32;

export const ProductCardContainer = styled.View`
  width: ${cardWidth}px;
  flex-direction: row;
  background-color: ${(props) => props.theme.colors.ui.primary};
  border-radius: ${(props) => props.theme.space[3]};
  margin-horizontal: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
  overflow: hidden;
`;

export const DescriptionWrapper = styled.View``;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const PriceContainer = styled.View`
  margin-left: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const TitleContainer = styled.View`
  margin-horizontal: ${(props) => props.theme.space[2]};
  margin-top: ${(props) => props.theme.space[2]};
`;
