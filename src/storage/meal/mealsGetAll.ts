import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealProps } from "@type/data";

export async function mealsGetAll(): Promise<mealProps[]> {
  try {
    // 1. Pega todas as chaves salvas
    const allKeys = await AsyncStorage.getAllKeys();

    // 2. Filtra apenas as que começam com "meals-"
    const mealKeys = allKeys.filter((key) => key.startsWith("meals-"));

    // 3. Recupera os valores dessas chaves
    const keyValuePairs = await AsyncStorage.multiGet(mealKeys);

    // 4. Transforma os valores JSON em objetos
    const allMeals = keyValuePairs.flatMap(([key, value]) => {
      if (value) {
        try {
          const meals = JSON.parse(value);
          // Pode ser um array ou objeto, depende de como você salvou

          return Object.values(meals);
        } catch (e) {
          console.warn(`Erro ao parsear dados de ${key}:`, e);
          return [];
        }
      }
      return [];
    });

    return allMeals; // retorna todas as refeições de todos os dias
  } catch (error) {
    console.error("Erro ao buscar refeições:", error);
    return [];
  }
}
