import AsyncStorage from "@react-native-async-storage/async-storage";

export async function mealsClearAll() {
  try {
    // 1. Pega todas as chaves salvas
    const allKeys = await AsyncStorage.getAllKeys();

    // 2. Filtra apenas as que começam com "meals-"
    const mealKeys = allKeys.filter((key) => key.startsWith("meals-"));

    // 3. Remove todas as chaves filtradas
    if (mealKeys.length > 0) {
      await AsyncStorage.multiRemove(mealKeys);
    }

    // Opcional: retorna true para indicar sucesso
    return true;
  } catch (error) {
    console.error("Erro ao limpar refeições:", error);
    return false;
  }
}
