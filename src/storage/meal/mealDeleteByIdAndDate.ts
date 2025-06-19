import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealProps } from "@type/data";

export async function mealDeleteByIdAndDate(id: string, date: string) {
  try {
    const mealsOfTheDay = `meals-${date}`;
    const existingMeals = await AsyncStorage.getItem(mealsOfTheDay);

    if (!existingMeals) return;

    const storage: mealProps[] = JSON.parse(existingMeals);

    // Remove o item com o id informado
    const updatedMeals = storage.filter((item) => item.id !== id);

    // Salva a lista atualizada
    await AsyncStorage.setItem(mealsOfTheDay, JSON.stringify(updatedMeals));
  } catch (error) {
    throw error;
  }
}
