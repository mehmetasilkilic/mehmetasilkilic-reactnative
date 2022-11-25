import { TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons";

import { Text } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utils/safeArea.component";

import { RootStackParams } from "../../../infrastructure/navigation/app.navigator";

import {
  InputWrapper,
  TitleWrapper,
  InputLight,
  SubmitContainer,
  FormContainer,
} from "./create.styles";

type Props = NativeStackScreenProps<RootStackParams, "Create">;

export const Create = ({ navigation }: Props) => {
  const goHome = () => navigation.navigate("Home");

  /*   let Input;
  if (autoDarkMode) {
    Input = phoneTheme === "dark" ? InputDark : InputLight;
  } else {
    Input = darkMode ? InputDark : InputLight;
  } */

  /*   const onSubmit = (formData) => {
    dispatch(register(formData));
  }; */

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      Price: "",
      Description: "",
      Avatar: "",
      Category: "",
    },
  });

  return (
    <>
      <SafeArea>
        <TitleWrapper>
          <TouchableOpacity onPress={goHome}>
            <Ionicons name="arrow-back" size={30} color="black" />
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
                <InputLight
                  label="Name"
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  autoCapitalize="none"
                  value={value}
                  outlineColor={errors.Name ? "#F44336" : "#9C9C9C"}
                  activeOutlineColor="#4aa8d0"
                />
              )}
              name="Name"
            />
          </InputWrapper>
          <InputWrapper>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputLight
                  label="Price"
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  autoCapitalize="none"
                  value={value}
                  outlineColor={errors.Name ? "#F44336" : "#9C9C9C"}
                  activeOutlineColor="#4aa8d0"
                />
              )}
              name="Price"
            />
          </InputWrapper>
          <InputWrapper>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputLight
                  label="Description"
                  mode="outlined"
                  multiline={true}
                  style={{ height: 200, textAlignVertical: "top" }}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  autoCapitalize="none"
                  value={value}
                  outlineColor={errors.Name ? "#F44336" : "#9C9C9C"}
                  activeOutlineColor="#4aa8d0"
                />
              )}
              name="Description"
            />
          </InputWrapper>
          <InputWrapper>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputLight
                  label="Image Link"
                  mode="outlined"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  autoCapitalize="none"
                  value={value}
                  outlineColor={errors.Name ? "#F44336" : "#9C9C9C"}
                  activeOutlineColor="#4aa8d0"
                />
              )}
              name="Avatar"
            />
          </InputWrapper>
        </FormContainer>
      </SafeArea>
      <TouchableOpacity>
        {/*  handleSubmit()(onSubmit)  */}
        <SubmitContainer>
          <Text variant="titleSmallInverse">Add Product</Text>
        </SubmitContainer>
      </TouchableOpacity>
    </>
  );
};
