import * as S from "./styles";
import Header from "@components/Header";
import StatsCardLarge from "@components/StatsCardLarge";
import { useNavigation, useRoute } from "@react-navigation/native";
import theme from "@theme/index";
import { ScoreBoardStats } from "@type/data";

type RouteParams = {
  stats: ScoreBoardStats;
};

export default function Stats() {
  const route = useRoute();
  const navigation = useNavigation();
  const statsInfo = route.params as RouteParams;

  return (
    <>
      <Header type="statsIsOn" stats={statsInfo.stats} />
      <S.Container>
        <S.StatsLabel>Estatísticas gerais</S.StatsLabel>

        <StatsCardLarge
          color={theme.COLORS.GRAY_6}
          height={89}
          width="100%"
          title={`${statsInfo.stats.maxSequence}`}
          subtitle="melhor sequência de pratos dentro da dieta"
        ></StatsCardLarge>
        <StatsCardLarge
          color={theme.COLORS.GRAY_6}
          height={89}
          width="100%"
          title={`${statsInfo.stats.total}`}
          subtitle="refeições registradas"
        ></StatsCardLarge>

        <S.ContainerRow>
          <StatsCardLarge
            color={theme.COLORS.GREEN_LIGHT}
            height={89}
            width="50%"
            title={`${statsInfo.stats.onDiet}`}
            subtitle="refeições registradas"
          ></StatsCardLarge>

          <StatsCardLarge
            color={theme.COLORS.RED_LIGHT}
            height={89}
            width="50%"
            title={`${statsInfo.stats.offDiet}`}
            subtitle="refeições registradas"
          ></StatsCardLarge>
        </S.ContainerRow>
      </S.Container>
    </>
  );
}
