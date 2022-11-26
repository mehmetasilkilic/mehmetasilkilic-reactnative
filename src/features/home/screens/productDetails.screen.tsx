import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParams } from "../../../infrastructure/navigation/app.navigator";

import { useGetSingleProductQuery } from "../../../store/products/products.services";

import { Loading } from "../../../components/loading/loading.component";
import { SafeArea } from "../../../components/utils/safeArea.component";
import { Text } from "../../../components/typography/text.component";

import {
  CloseContainer,
  ProductImage,
  ProductScrollViewContainer,
  ProductScrollView,
  DescriptionContainer,
  CategoryContainer,
  Row,
  TitleContainer,
  Icon,
} from "./productDetails.styles";

type Props = NativeStackScreenProps<RootStackParams, "ProductDetails">;

export const ProductDetails = ({ navigation, route }: Props) => {
  const { data, isLoading } = useGetSingleProductQuery(route.params.id);

  const close = () => navigation.pop();

  if (isLoading) {
    return (
      <SafeArea>
        <Loading />
      </SafeArea>
    );
  }
  return (
    <>
      <SafeArea>
        <CloseContainer onPress={close}>
          <Icon name="close" size={24} color="black" />
        </CloseContainer>
        <ProductImage source={{ uri: data.product.avatar }} />
      </SafeArea>
      <ProductScrollViewContainer>
        <ProductScrollView
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
        >
          <Row>
            <TitleContainer>
              <Text variant="titleMedium">{data.product.name}</Text>
            </TitleContainer>
            <Text variant="titleMedium">$ {data.product.price}</Text>
          </Row>
          <CategoryContainer>
            <Text variant="caption">{data.product.category}</Text>
          </CategoryContainer>
          <DescriptionContainer>
            <Text variant="label">{data.product.description}</Text>
          </DescriptionContainer>
        </ProductScrollView>
      </ProductScrollViewContainer>
    </>
  );
};
