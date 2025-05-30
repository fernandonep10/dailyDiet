import * as S from "./styles";
import { MealCardProps } from "./types";

export default function MealCard({
  time,
  title,
  type,
  ...rest
}: MealCardProps) {
  return (
    <S.Container>
      <S.TimeLabel> {time} </S.TimeLabel>
      <S.Separator />
      <S.MealLabel> {title}</S.MealLabel>
      <S.Class type={type} />
    </S.Container>
  );
}
