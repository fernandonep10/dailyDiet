import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`
  width: 56px;
  width: 56px;

  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))``;
