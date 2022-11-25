import { ListRenderItem, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParams } from "../../../infrastructure/navigation/app.navigator";

import { useAppSelector } from "../../../store/hooks";

import { SafeAreaSecondary } from "../../../components/utils/safeArea.component";

import { Header } from "../components/header.component";
import { CategoryList } from "../components/categoryList.component";
import { ProductCard } from "../components/productCard.component";
import { ProductCardHorizontal } from "../components/productCardHorizontal.component";

import { ProductList, CreateButton, Icon } from "./home.styles";

type Props = NativeStackScreenProps<RootStackParams, "Home">;

export type ProductProps = {
  id: number;
  Name: string;
  Price: number;
  Avatar: string;
};

const products = [
  {
    id: 1,
    Name: "Apple iPhone 14 Pro",
    Price: 1200,
    Avatar:
      "https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg",
  },
  {
    id: 2,
    Name: "Apple iPhone 14 Pro Max",
    Price: 1200,
    Avatar:
      "https://www.apple.com/v/iphone-14-pro/c/images/overview/hero/hero_endframe__dtzvajyextyu_large.jpg",
  },
];

export const Home = ({ navigation }: Props) => {
  const appearance = useAppSelector((state) => state.utils.appearance);

  const goCreate = () => navigation.navigate("Create");
  const goProduct = () => navigation.navigate("ProductDetails", { id: 1 });

  const renderItem: ListRenderItem<ProductProps> = ({ item }) => (
    <TouchableOpacity onPress={goProduct}>
      {appearance ? (
        <ProductCardHorizontal data={item} />
      ) : (
        <ProductCard data={item} />
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaSecondary>
      <Header />
      <CategoryList />
      <ProductList
        data={products}
        numColumns={appearance ? 1 : 2}
        key={appearance ? 1 : 2}
        renderItem={renderItem}
        keyExtractor={(item: ProductProps) => item.id}
      />
      <CreateButton onPress={goCreate}>
        <Icon name="plus" size={30} />
      </CreateButton>
    </SafeAreaSecondary>
  );
};
