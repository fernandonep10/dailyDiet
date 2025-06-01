import * as S from "./styles";
import { HeaderBasicProps } from "./types";

export default function HeaderBasic({ color, label }: HeaderBasicProps) {
  return (
    <S.Container color={color}>
      <S.goBack>
        <S.goBackIcon />
      </S.goBack>
      <S.Label>{label}</S.Label>
    </S.Container>
  );
}
