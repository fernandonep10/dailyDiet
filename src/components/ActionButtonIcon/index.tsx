import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";

type ActionButtonIconProps = {
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ActionButtonIcon({ icon }: ActionButtonIconProps) {
  return (
    <S.Container>
      <S.Icon name={icon}></S.Icon>
    </S.Container>
  );
}
