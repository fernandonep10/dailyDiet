import * as S from "./styles";
import Header from "@components/Header";
import ActionButton from "@components/ActionButton";
import Loading from "@components/Loading";
import { useState, useCallback } from "react";
import MealList, { MealListSectionsPropsData } from "@components/MealsList";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { mealsGetAll } from "@storage/meal/mealsGetAll";
import { transformMealsToSectionList } from "@utils/index";

export default function Home() {
  const [meals, setMeals] = useState<MealListSectionsPropsData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  async function fetchMeals() {
    try {
      setIsLoading(true);
      const mealData = await mealsGetAll();

      const mealTreated = transformMealsToSectionList(mealData);

      setMeals(mealTreated);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  function handleNewMeal() {
    navigation.navigate("mealDetails");
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <S.ContainerHeader>
      <Header type="statsIsOff" />
      <S.CotainerBody>
        <S.mealsLabel>Refeições</S.mealsLabel>
        <ActionButton
          title="Nova Refeição"
          icon="add"
          onPress={handleNewMeal}
        />
        {isLoading ? <Loading /> : <MealList sections={meals} />}
      </S.CotainerBody>
    </S.ContainerHeader>
  );
}
