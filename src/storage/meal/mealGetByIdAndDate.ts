import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealProps } from "@type/data";

export async function mealGetByIdAndDate(id: string, date: string) {
  try {
    const mealsOfTheDay = `meals-${date}`;
    const existingMeals = await AsyncStorage.getItem(mealsOfTheDay);

    if (!existingMeals) return null;

    const storage: mealProps[] = JSON.parse(existingMeals);

    const meal = storage.find((item) => item.id === id);

    return meal;
  } catch (error) {
    throw error;
  }
}
