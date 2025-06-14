import * as S from "./styles";
import logoImg from "@assets/logo.png";
import profile from "@assets/profile.png";
import { useNavigation } from "@react-navigation/native";
import { ScoreBoardStats } from "@type/data";

type Props = {
  type: "statsIsOn" | "statsIsOff";
  stats: ScoreBoardStats;
};

export default function Header({ type, stats }: Props) {
  const navigation = useNavigation();

  function handleStats() {
    navigation.navigate("stats", { stats });
  }

  function handleHome() {
    navigation.navigate("home");
  }

  return (
    <S.Container>
      {type === "statsIsOff" && (
        <S.ContainerLogoProfile>
          <S.Logo source={logoImg} />
          <S.ProfilePhoto source={profile} />
        </S.ContainerLogoProfile>
      )}

      <S.scoreBoardContainer type={type} stats={stats}>
        <S.scoreBoard>{stats.percentage}%</S.scoreBoard>
        <S.scoreBoardSub>das refeições dentro da dieta</S.scoreBoardSub>

        {type === "statsIsOff" ? (
          <S.goToScoreButton onPress={handleStats}>
            <S.goToScoreIcon />
          </S.goToScoreButton>
        ) : (
          <S.goHomeButton onPress={handleHome}>
            <S.goHomeIcon />
          </S.goHomeButton>
        )}
      </S.scoreBoardContainer>
    </S.Container>
  );
}
