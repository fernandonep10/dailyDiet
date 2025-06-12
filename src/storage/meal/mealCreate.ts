import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetByDay } from "@storage/meal/mealGetByDay";

import { mealProps } from "@type/data";
import { AppError } from "@utils/AppError";

export async function mealCreate(params: mealProps) {
  try {
    if (params.type === undefined) {
      throw new AppError("Preencha todas as informações da refeição!");
    }

    const storage = await mealGetByDay(params.date);

    storage.push(params);

    await AsyncStorage.setItem(`meals-${params.date}`, JSON.stringify(storage));
  } catch (error) {
    throw error;
  }
}
