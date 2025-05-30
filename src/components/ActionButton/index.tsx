import * as S from "./styles";
import { TouchableOpacityProps } from "react-native";
import { ActionButtonIcon } from "@components/ActionButtonIcon";
import { MaterialIcons } from "@expo/vector-icons";

type actionButtonProps = TouchableOpacityProps & {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
};
export default function ActionButton({
  title,
  icon,
  ...rest
}: actionButtonProps) {
  return (
    <S.actionButton>
      <ActionButtonIcon icon={icon} />
      <S.actionButtonText>{title}</S.actionButtonText>
    </S.actionButton>
  );
}
