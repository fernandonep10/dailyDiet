import { MealCardPropsData } from "@components/MealCard/types";

export type MealListSectionsPropsData = {
  title: string;
  data: MealCardPropsData[];
};

export type MealListPropsData = {
  sections: MealListSectionsPropsData[];
};
