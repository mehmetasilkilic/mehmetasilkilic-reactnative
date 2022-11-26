import { ProductProps } from "../screens/home.screen";

import { Text } from "../../../components/typography/text.component";

import {
  ProductCardContainer,
  ProductImage,
  PriceContainer,
  TitleContainer,
} from "./productCard.styles";

export const ProductCard = ({ data }: { data: ProductProps }) => {
  const { name, price, avatar } = data;

  return (
    <ProductCardContainer>
      <ProductImage source={{ uri: avatar }} />
      <TitleContainer>
        <Text variant="label" numberOfLines={1}>
          {name}
        </Text>
      </TitleContainer>
      <PriceContainer>
        <Text variant="label">$ {price}</Text>
      </PriceContainer>
    </ProductCardContainer>
  );
};
