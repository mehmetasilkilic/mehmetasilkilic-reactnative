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
  const { Name, Price, Avatar } = data;

  return (
    <ProductCardContainer>
      <ProductImage source={{ uri: Avatar }} />
      <DescriptionWrapper>
        <TitleContainer>
          <Text variant="label" numberOfLines={1}>
            {Name}
          </Text>
        </TitleContainer>
        <PriceContainer>
          <Text variant="label">$ {Price}</Text>
        </PriceContainer>
      </DescriptionWrapper>
    </ProductCardContainer>
  );
};
