import * as S from "./styles";
import { StatsCardProps } from "./types";

export default function StatsCardLarge({
  color,
  height,
  width,
  title,
  subtitle,
  ...rest
}: StatsCardProps) {
  return (
    <S.Container color={color} height={height} width={width}>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Container>
  );
}
