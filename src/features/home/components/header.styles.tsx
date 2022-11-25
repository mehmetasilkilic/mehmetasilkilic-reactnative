import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.ui.secondary};
  padding-horizontal: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const HeaderImage = styled.Image`
  height: 28px;
  width: 150px;
`;

export const Row = styled.View`
  height: 40px;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled(TouchableOpacity)`
  margin-left: ${(props) => props.theme.space[2]};
`;
