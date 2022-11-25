import { ProductProps } from "../screens/home.screen";

import { Text } from "../../../components/typography/text.component";

import {
  ProductCardContainer,
  ProductImage,
  PriceContainer,
  TitleContainer,
} from "./productCard.styles";

export const ProductCard = ({ data }: { data: ProductProps }) => {
  const { Name, Price, Avatar } = data;

  return (
    <ProductCardContainer>
      <ProductImage source={{ uri: Avatar }} />
      <TitleContainer>
        <Text variant="label" numberOfLines={1}>
          {Name}
        </Text>
      </TitleContainer>
      <PriceContainer>
        <Text variant="label">$ {Price}</Text>
      </PriceContainer>
    </ProductCardContainer>
  );
};
