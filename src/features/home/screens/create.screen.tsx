import { useState } from "react";
import { TouchableOpacity, ListRenderItem } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm, Controller } from "react-hook-form";

import type { CategoryProps } from "../components/categoryList.component";

import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import {
  useAddNewProductMutation,
  useGetCategoriesQuery,
} from "../../../store/products/products.services";
import { addCount, selectCategory } from "../../../store/utils/utils";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utils/safeArea.component";

import { RootStackParams } from "../../../infrastructure/navigation/app.navigator";

import {
  InputWrapper,
  TitleWrapper,
  InputLight,
  InputDark,
  SubmitContainer,
  FormContainer,
  Icon,
  CategoryListContainer,
  CategoryFlatList,
  CategoryContainer,
  SelectedCategoryContainer,
} from "./create.styles";

type Props = NativeStackScreenProps<RootStackParams, "Create">;

export type FormDataProps = {
  name: string;
  price: number;
  description: string;
  avatar: string;
  category: string;
  developerEmail: string;
};

export const Create = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();

  const [addNewProduct] = useAddNewProductMutation();
  const { data, isLoading } = useGetCategoriesQuery();

  const [selected, setSelected] = useState({
    _id: "",
    name: "",
    createdAt: "",
    updatedAt: "",
    __v: 1,
  });
  const darkMode = useAppSelector((state) => state.utils.darkMode);

  const goHome = () => {
    navigation.navigate("Home");
  };

  const Input = darkMode ? InputDark : InputLight;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    defaultValues: {
      name: "",
      price: "",
      description: "",
      avatar: "",
      category: "",
      developerEmail: "mehmetasil96@gmail.com",
    },
  });

  const onSubmit = handleSubmit((formData) => {
    if (selected.name) {
      formData.category = selected.name;
      formData.price = Number(formData.price);
      addNewProduct(formData);
      dispatch(
        selectCategory({
          _id: "all",
          name: "All",
          createdAt: "1",
          updatedAt: "1",
          __v: 0,
        })
      );
      setTimeout(() => {
        dispatch(addCount());
      }, 500);
      goHome();
    } else {
      alert("You have to select a category");
    }
  });

  const renderItem: ListRenderItem<CategoryProps> = ({
    item,
  }: {
    item: CategoryProps;
  }) => (
    <>
      {selected && selected._id === item._id ? (
        <SelectedCategoryContainer>
          <Text variant="labelWhite">{item.name}</Text>
        </SelectedCategoryContainer>
      ) : (
        <CategoryContainer onPress={() => setSelected(item)}>
          <Text variant="label">{item.name}</Text>
        </CategoryContainer>
      )}
    </>
  );

  if (isLoading) return <></>;

  return (
    <>
      <SafeArea>
        <TitleWrapper>
          <TouchableOpacity onPress={goHome}>
            <Icon name="arrow-back" size={30} />
          </TouchableOpacity>
          <Text variant="titleMedium">Create A New Product</Text>
        </TitleWrapper>
        <FormContainer>
          <InputWrapper>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Name"
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  outlineColor={errors.name ? "#F44336" : "#9C9C9C"}
                  activeOutlineColor="#4aa8d0"
                />
              )}
              name="name"
            />
          </InputWrapper>
          <InputWrapper>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Price"
                  keyboardType="numeric"
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  outlineColor={errors.price ? "#F44336" : "#9C9C9C"}
                  activeOutlineColor="#4aa8d0"
                />
              )}
              name="price"
            />
          </InputWrapper>
          <InputWrapper>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Description"
                  mode="outlined"
                  multiline={true}
                  style={{ height: 200, textAlignVertical: "top" }}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  outlineColor={errors.description ? "#F44336" : "#9C9C9C"}
                  activeOutlineColor="#4aa8d0"
                />
              )}
              name="description"
            />
          </InputWrapper>
          <InputWrapper>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  label="Image Link"
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  outlineColor={errors.avatar ? "#F44336" : "#9C9C9C"}
                  activeOutlineColor="#4aa8d0"
                />
              )}
              name="avatar"
            />
          </InputWrapper>
          <CategoryListContainer>
            <CategoryFlatList
              data={data.categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={(item: CategoryProps) => item._id}
            />
          </CategoryListContainer>
        </FormContainer>
        <SubmitContainer onPress={onSubmit}>
          <Text variant="titleSmallInverse">Add Product</Text>
        </SubmitContainer>
      </SafeArea>
    </>
  );
};
/* onPress={() => dispatch(selectCategory(item))} */
