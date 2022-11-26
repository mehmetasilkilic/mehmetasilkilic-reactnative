import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParams } from "../../../infrastructure/navigation/app.navigator";

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
  Icon,
} from "./productDetails.styles";

type Props = NativeStackScreenProps<RootStackParams, "ProductDetails">;

const product = {
  _id: "1",
  name: "Apple iPhone 14 Pro",
  price: 1200,
  avatar:
    "https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg",
  description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellatquos cumque illo delectus commodi.",
  category: "Electronics",
};

export const ProductDetails = ({ navigation }: Props) => {
  const close = () => navigation.pop();

  return (
    <>
      <SafeArea>
        <CloseContainer onPress={close}>
          <Icon name="close" size={24} color="black" />
        </CloseContainer>
        <ProductImage source={{ uri: product.avatar }} />
      </SafeArea>
      <ProductScrollViewContainer>
        <ProductScrollView
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
        >
          <Row>
            <Text variant="titleMedium">{product.name}</Text>
            <Text variant="titleMedium">$ {product.price}</Text>
          </Row>
          {/* <CategoryFlatList
            ListFooterComponent={<Spacer />}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return ( */}
          <CategoryContainer>
            <Text variant="label">{product.category}</Text>
          </CategoryContainer>
          {/*    );
            }}
            keyExtractor={(item) => item.id}
          /> */}
          <DescriptionContainer>
            <Text variant="label">{product.description}</Text>
          </DescriptionContainer>
        </ProductScrollView>
      </ProductScrollViewContainer>
    </>
  );
};
