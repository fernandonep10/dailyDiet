import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";

type ActionButtonIconProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
  color: "PRIMARY" | "SECONDARY";
};

export function ActionButtonIcon({ icon, color }: ActionButtonIconProps) {
  return (
    <S.Container>
      <S.Icon name={icon} iconColor={color} />
    </S.Container>
  );
}
