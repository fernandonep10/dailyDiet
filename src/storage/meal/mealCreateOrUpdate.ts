import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetByDay } from "@storage/meal/mealGetByDay";

import { mealProps } from "@type/data";
import { AppError } from "@utils/AppError";

export async function mealCreateOrUpdate(params: mealProps) {
  try {
    const isInvalidParams =
      !params.type ||
      Object.entries(params).some(
        ([key, value]) =>
          key !== "type" && typeof value === "string" && value.trim() === ""
      );

    if (isInvalidParams) {
      throw new AppError("Preencha todas as informações da refeição!");
    }

    const storage: mealProps[] = await mealGetByDay(params.date);

    // Procura o índice da refeição com o mesmo id
    const mealIndex = storage.findIndex((meal) => meal.id === params.id);

    if (mealIndex !== -1) {
      // Se encontrou, atualiza a refeição existente
      storage[mealIndex] = params;
    } else {
      // Se não encontrou, adiciona uma nova
      storage.push(params);
    }

    await AsyncStorage.setItem(`meals-${params.date}`, JSON.stringify(storage));

    await AsyncStorage.setItem(`meals-${params.date}`, JSON.stringify(storage));
  } catch (error) {
    throw error;
  }
}
