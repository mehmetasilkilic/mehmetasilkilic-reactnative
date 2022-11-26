import { ListRenderItem } from "react-native";

import { useGetCategoriesQuery } from "../../../store/products/products.services";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { selectCategory } from "../../../store/utils/utils";

import { Text } from "../../../components/typography/text.component";

import {
  CategoryFlatListContainer,
  CategoryFlatList,
  SpacerFooter,
  SpacerHeader,
  CategoryContainer,
  SelectedCategoryContainer,
} from "./categoryList.styles";

export type CategoryProps = {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export const CategoryList = () => {
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetCategoriesQuery();
  const selected = useAppSelector((state) => state.utils.selected);

  const renderItem: ListRenderItem<CategoryProps> = ({
    item,
  }: {
    item: CategoryProps;
  }) => (
    <>
      {selected._id === item._id ? (
        <SelectedCategoryContainer>
          <Text variant="labelWhite">{item.name}</Text>
        </SelectedCategoryContainer>
      ) : (
        <CategoryContainer onPress={() => dispatch(selectCategory(item))}>
          <Text variant="label">{item.name}</Text>
        </CategoryContainer>
      )}
    </>
  );

  const All = {
    _id: "all",
    name: "All",
    createdAt: "1",
    updatedAt: "1",
    __v: 0,
  };

  if (isLoading) return <></>;

  return (
    <CategoryFlatListContainer>
      <CategoryFlatList
        ListFooterComponent={<SpacerFooter />}
        ListHeaderComponent={<SpacerHeader />}
        data={[All, ...data.categories]}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item: CategoryProps) => item._id}
      />
    </CategoryFlatListContainer>
  );
};
