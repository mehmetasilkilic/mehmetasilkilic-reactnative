import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";

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
} from "./productDetails.styles";

type Props = NativeStackScreenProps<RootStackParams, "ProductDetails">;

/* const data = [
  {
    id: 1,
    title: "Electronics",
  },
  {
    id: 2,
    title: "SmartPhone",
  },
  {
    id: 3,
    title: "Apple",
  },
  {
    id: 4,
    title: "iPhone",
  },
  {
    id: 5,
    title: "iPhoneeeeeeeeee",
  },
]; */

const product = {
  id: "1",
  Name: "Apple iPhone 14 Pro",
  Price: 1200,
  Avatar:
    "https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg",
  Description:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellatquos cumque illo delectus commodi.",
  Category: "Electronics",
};

export const ProductDetails = ({ navigation }: Props) => {
  const close = () => navigation.pop();

  return (
    <>
      <SafeArea>
        <CloseContainer onPress={close}>
          <AntDesign name="close" size={24} color="black" />
        </CloseContainer>
        <ProductImage source={{ uri: product.Avatar }} />
      </SafeArea>
      <ProductScrollViewContainer>
        <ProductScrollView
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
        >
          <Row>
            <Text variant="titleMedium">{product.Name}</Text>
            <Text variant="titleMedium">$ {product.Price}</Text>
          </Row>
          {/* <CategoryFlatList
            ListFooterComponent={<Spacer />}
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
              return ( */}
          <CategoryContainer>
            <Text variant="label">{product.Category}</Text>
          </CategoryContainer>
          {/*    );
            }}
            keyExtractor={(item) => item.id}
          /> */}
          <DescriptionContainer>
            <Text variant="label">{product.Description}</Text>
          </DescriptionContainer>
        </ProductScrollView>
      </ProductScrollViewContainer>
    </>
  );
};
