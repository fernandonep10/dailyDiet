import * as S from "./styles";
import Header from "@components/Header";
import StatsCardLarge from "@components/StatsCardLarge";
import theme from "@theme/index";

export default function Stats() {
  return (
    <>
      <Header type="statsIsOn" />
      <S.Container>
        <S.StatsLabel>Estatísticas gerais</S.StatsLabel>

        <StatsCardLarge
          color={theme.COLORS.GRAY_6}
          height={89}
          width="100%"
          title="4"
          subtitle="melhor sequência de pratos dentro da dieta"
        ></StatsCardLarge>
        <StatsCardLarge
          color={theme.COLORS.GRAY_6}
          height={89}
          width="100%"
          title="109"
          subtitle="refeições registradas"
        ></StatsCardLarge>

        <S.ContainerRow>
          <StatsCardLarge
            color={theme.COLORS.GREEN_LIGHT}
            height={89}
            width="50%"
            title="109"
            subtitle="refeições registradas"
          ></StatsCardLarge>

          <StatsCardLarge
            color={theme.COLORS.RED_LIGHT}
            height={89}
            width="50%"
            title="109"
            subtitle="refeições registradas"
          ></StatsCardLarge>
        </S.ContainerRow>
      </S.Container>
    </>
  );
}
