import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as S from "./styles";

type ActionButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
};

export function ActionButtonIcon({ icon, ...rest }: ActionButtonIconProps) {
  return (
    <S.Container>
      <S.Icon name={icon}></S.Icon>
    </S.Container>
  );
}
