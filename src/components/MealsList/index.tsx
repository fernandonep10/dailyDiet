import * as S from "./styles";
import MealCard from "@components/MealCard";
import { MealCardPropsData } from "@components/MealCard/types";
import { MealListPropsData } from "./types";
import { useNavigation } from "@react-navigation/native";

export type { MealListSectionsPropsData } from "@components/MealsList/types";

export default function MealList({ sections }: MealListPropsData) {
  //console.log(JSON.stringify(sections));

  const navigation = useNavigation();

  function handleEditMeal(id: string, date: string) {
    navigation.navigate("mealDetails", { id, date });
  }

  return (
    <S.List
      sections={sections}
      keyExtractor={(item) => item.id}
      renderItem={({ item }: { item: MealCardPropsData }) => (
        <MealCard
          {...item}
          onPress={() => handleEditMeal(item.id, item.date)}
        />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <S.HeaderList>{title}</S.HeaderList>
      )}
    />
  );
}
