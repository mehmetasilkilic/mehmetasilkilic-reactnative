import { ProductProps } from "../screens/home.screen";

import { Text } from "../../../components/typography/text.component";

import {
  ProductCardContainer,
  ProductImage,
  DescriptionWrapper,
  PriceContainer,
  TitleContainer,
} from "./productCardHorizontal.styles";

export const ProductCardHorizontal = ({ data }: { data: ProductProps }) => {
  const { name, price, avatar } = data;

  return (
    <ProductCardContainer>
      <ProductImage source={{ uri: avatar }} />
      <DescriptionWrapper>
        <TitleContainer>
          <Text variant="label" numberOfLines={1}>
            {name}
          </Text>
        </TitleContainer>
        <PriceContainer>
          <Text variant="label">$ {price}</Text>
        </PriceContainer>
      </DescriptionWrapper>
    </ProductCardContainer>
  );
};
