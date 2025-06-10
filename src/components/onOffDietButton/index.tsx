import * as S from "./styles";
import { onOffDietPropsOptions } from "./types";

export default function OnOffDietButton({
  dietType,
  label,
  ...rest
}: onOffDietPropsOptions) {
  return (
    <S.OnOffDietContainer dietType={dietType} label={label} {...rest}>
      <S.OnOffDietLabel>{label}</S.OnOffDietLabel>
    </S.OnOffDietContainer>
  );
}
