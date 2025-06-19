import { View } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

type IconProps = {
  iconColor?: "PRIMARY" | "SECONDARY";
};

export const Container = styled(View)`
  width: 56px;
  width: 56px;

  justify-content: center;
  align-items: center;
`;

export const Icon = styled(MaterialIcons).attrs<IconProps>(
  ({ theme, iconColor }) => ({
    size: 24,
    color: iconColor === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_1,
  })
)``;
