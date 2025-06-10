import AsyncStorage from "@react-native-async-storage/async-storage";

export async function mealGetByDay(day: string) {
  try {
    const mealsOfTheDay = `meals-${day}`;
    const existingMeals = await AsyncStorage.getItem(mealsOfTheDay);
    const storage = existingMeals ? JSON.parse(existingMeals) : [];

    return storage;
  } catch (error) {
    throw error;
  }
}
