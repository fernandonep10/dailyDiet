import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";
import { HeaderBasicProps } from "./types";

export default function HeaderBasic({ color, label }: HeaderBasicProps) {
  const navigation = useNavigation();

  function handleStats() {
    navigation.goBack();
  }

  return (
    <S.Container color={color}>
      <S.goBack onPress={handleStats}>
        <S.goBackIcon />
      </S.goBack>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
}
