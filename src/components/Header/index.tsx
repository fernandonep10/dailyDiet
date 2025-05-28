import * as S from "./styles";
import logoImg from "@assets/logo.png";
import profile from "@assets/profile.png";

type Props = {
  type: "statsIsOn" | "statsIsOff";
};

export default function Header({ type }: Props) {
  return (
    <S.Container>
      {type === "statsIsOff" && (
        <S.ContainerLogoProfile>
          <S.Logo source={logoImg} />
          <S.ProfilePhoto source={profile} />
        </S.ContainerLogoProfile>
      )}

      <S.scoreBoardContainer type={type}>
        <S.scoreBoard>90,86%</S.scoreBoard>
        <S.scoreBoardSub>das refeições dentro da dieta</S.scoreBoardSub>

        {type === "statsIsOff" ? (
          <S.goToScoreButton>
            <S.goToScoreIcon />
          </S.goToScoreButton>
        ) : (
          <S.goHomeButton>
            <S.goHomeIcon />
          </S.goHomeButton>
        )}
      </S.scoreBoardContainer>
    </S.Container>
  );
}
