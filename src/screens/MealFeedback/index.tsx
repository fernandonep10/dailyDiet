import * as S from "./styles";
import { feedbackProps } from "./types";
import man from "@assets/man.png";
import woman from "@assets/woman.png";
import ActionButton from "@components/ActionButton";

export default function MealFeedback({ type }: feedbackProps) {
  return (
    <S.Container>
      <S.feedbackContainer>
        <S.Title type={type}>
          {type === "PRIMARY" ? "Continue assim!" : "Que pena!"}
        </S.Title>
        <S.SubTitle>
          {type === "PRIMARY"
            ? "Você continua dentro da dieta. Muito bem!"
            : "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!"}
        </S.SubTitle>
        {type === "PRIMARY" ? (
          <S.Illustration source={woman} />
        ) : (
          <S.Illustration source={man} />
        )}
      </S.feedbackContainer>

      <ActionButton title="Ir para página Inicial" />
    </S.Container>
  );
}
