import { ListRenderItem } from "react-native";

import { Text } from "../../../components/typography/text.component";

import {
  CategoryFlatList,
  SpacerFooter,
  SpacerHeader,
  CategoryContainer,
} from "./categoryList.styles";

export type CategoryProps = {
  id: number;
  Title: string;
};

const data = [
  {
    id: 1,
    Title: "Electronics",
  },
  {
    id: 2,
    Title: "SmartPhone",
  },
  {
    id: 3,
    Title: "Apple",
  },
  {
    id: 4,
    Title: "iPhone",
  },
  {
    id: 5,
    Title: "iPhoneeeeeeeeee",
  },
];
export const CategoryList = () => {
  const renderItem: ListRenderItem<CategoryProps> = ({
    item,
  }: {
    item: CategoryProps;
  }) => (
    <CategoryContainer>
      <Text variant="label">{item.Title}</Text>
    </CategoryContainer>
  );

  return (
    <CategoryFlatList
      ListFooterComponent={<SpacerFooter />}
      ListHeaderComponent={<SpacerHeader />}
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item: CategoryProps) => item.id}
    />
  );
};
