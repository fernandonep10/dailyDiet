import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";
import { ActionButtonIcon } from "@components/ActionButtonIcon";
import { MaterialIcons } from "@expo/vector-icons";

type actionButtonProps = TouchableOpacityProps & {
  title: string;
  color: "PRIMARY" | "SECONDARY";
  icon?: keyof typeof MaterialIcons.glyphMap;
};

export default function ActionButton({
  title,
  icon,
  color,
  ...rest
}: actionButtonProps) {
  return (
    <S.actionButton color={color} {...rest}>
      {icon && <ActionButtonIcon icon={icon} color={color} />}
      <S.actionButtonText color={color}>{title}</S.actionButtonText>
    </S.actionButton>
  );
}
