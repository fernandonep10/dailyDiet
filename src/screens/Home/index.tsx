import * as S from "./styles";
import Header from "@components/Header";
import ActionButton from "@components/ActionButton";
import Loading from "@components/Loading";
import { useState, useCallback } from "react";
import MealList, { MealListSectionsPropsData } from "@components/MealsList";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { mealsClearAll } from "@storage/meal/mealClearAll";
import { transformMealsToSectionList, scoreBoardStats } from "@utils/index";
import { mealProps } from "@type/data";
import { ScoreBoardStats } from "@type/data";
import { StatusBar, View } from "react-native";
import theme from "@theme/index";

export default function Home() {
  const [scoreBord, setScoreBord] = useState<ScoreBoardStats>({
    percentage: "0,00",
    total: 0,
    onDiet: 0,
    offDiet: 0,
    situation: undefined,
    maxSequence: 0,
  });

  const [meals, setMeals] = useState<MealListSectionsPropsData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  async function fetchMeals() {
    try {
      //Descomente para limpar todas:
      //await mealsClearAll();

      setIsLoading(true);
      const mealData: mealProps[] = await mealsGetAll();
      const scoreBordStats = scoreBoardStats(mealData);

      //console.log(mealData);

      setScoreBord(scoreBordStats);

      const mealTreated = transformMealsToSectionList(mealData);

      setMeals(mealTreated);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  function handleNewMeal() {
    navigation.navigate("mealDetails", {});
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar
        backgroundColor={theme.COLORS.WHITE}
        barStyle="light-content" // ou "dark-content" conforme contraste
      />
      <S.ContainerHeader>
        <Header type={"statsIsOff"} stats={scoreBord} />
      </S.ContainerHeader>
      <S.CotainerBody>
        <S.mealsLabel>Refeições</S.mealsLabel>
        <ActionButton
          title="Nova Refeição"
          icon="add"
          onPress={handleNewMeal}
          color="PRIMARY"
        />
        {isLoading ? <Loading /> : <MealList sections={meals} />}
      </S.CotainerBody>
    </View>
  );
}
