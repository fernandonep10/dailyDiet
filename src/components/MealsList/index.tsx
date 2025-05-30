import * as S from "./styles";
import MealCard from "@components/MealCard";
import { MealCardPropsData } from "@components/MealCard/types";
import { MealListPropsData } from "./types";

export type { MealListSectionsPropsData } from "@components/MealsList/types";

export default function MealList({ sections }: MealListPropsData) {
  return (
    <S.List
      sections={sections}
      keyExtractor={(item, index) => `${item.time} - ${index}`}
      renderItem={({ item }: { item: MealCardPropsData }) => (
        <MealCard time={item.time} title={item.title} type={item.type} />
      )}
      renderSectionHeader={({ section: { title } }) => (
        <S.HeaderList>{title}</S.HeaderList>
      )}
    />
  );
}
