import { ListRenderItem, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParams } from "../../../infrastructure/navigation/app.navigator";

import { useAppSelector } from "../../../store/hooks";
import { useGetProductsQuery } from "../../../store/products/products.services";

import { SafeAreaSecondary } from "../../../components/utils/safeArea.component";

import { Header } from "../components/header.component";
import { CategoryList } from "../components/categoryList.component";
import { ProductCard } from "../components/productCard.component";
import { ProductCardHorizontal } from "../components/productCardHorizontal.component";

import { ProductList, CreateButton, Icon } from "./home.styles";
import { Text } from "../../../components/typography/text.component";

type Props = NativeStackScreenProps<RootStackParams, "Home">;

export type ProductProps = {
  _id: string;
  name: string;
  category: string;
  price: number;
  avatar: string;
};

export const Home = ({ navigation }: Props) => {
  const appearance = useAppSelector((state) => state.utils.appearance);
  const selected = useAppSelector((state) => state.utils.selected);

  const { data, error, isLoading } = useGetProductsQuery();

  const goCreate = () => navigation.navigate("Create");
  const goProduct = (id: string) =>
    navigation.navigate("ProductDetails", { id });

  const handleCategoryFilter = (products: ProductProps[]) => {
    if (selected.name === "All") {
      return products;
    } else {
      const newData = products.filter((item: ProductProps) => {
        if (item.category === selected.name) {
          return item;
        }
      });
      return newData;
    }
  };

  const renderItem: ListRenderItem<ProductProps> = ({ item }) => (
    <TouchableOpacity onPress={() => goProduct(item._id)}>
      {appearance ? (
        <ProductCardHorizontal data={item} />
      ) : (
        <ProductCard data={item} />
      )}
    </TouchableOpacity>
  );

  if (isLoading) return <Text variant="label"> Loading...</Text>;

  return (
    <SafeAreaSecondary>
      <Header />
      <CategoryList />
      <ProductList
        data={handleCategoryFilter(data.products)}
        numColumns={appearance ? 1 : 2}
        key={appearance ? 1 : 2}
        renderItem={renderItem}
        keyExtractor={(item: ProductProps) => item._id}
      />
      <CreateButton onPress={goCreate}>
        <Icon name="plus" size={30} />
      </CreateButton>
    </SafeAreaSecondary>
  );
};
