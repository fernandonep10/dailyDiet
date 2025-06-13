import HeaderBasic from "@components/HeaderBasic";
import theme from "@theme/index";
import * as S from "./styles";
import { Alert, View } from "react-native";
import { useEffect, useState } from "react";

import ActionButton from "@components/ActionButton";
import OnOffDietButton from "@components/onOffDietButton";
import { ActionButtonIcon } from "@components/ActionButtonIcon";
import { onOffDietStylePropsOptions } from "@type/style";
import * as Crypto from "expo-crypto";
import { mealCreateOrUpdate } from "@storage/meal/mealCreateOrUpdate";
import { mealProps } from "@type/data";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { mealGetByIdAndDate } from "@storage/meal/mealGetByIdAndDate";

type RouteParams = {
  id: string;
  date: string;
};

export default function MealDetails() {
  const route = useRoute();
  const navigation = useNavigation();
  const meal = route.params as RouteParams;

  const [mealData, setMealData] = useState<mealProps>({
    id: Crypto.randomUUID(),
    name: "",
    description: "",
    date: "",
    time: "",
    type: undefined, // ou 'ON_DIET' como default
  });

  function updateMealField<K extends keyof mealProps>(
    field: K,
    value: mealProps[K]
  ) {
    setMealData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleNewMeal() {
    try {
      await mealCreateOrUpdate(mealData);
      navigation.navigate("mealFeedback", { type: mealData.type });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Refeição", error.message);
      } else {
        Alert.alert("Nova Refeição", "Não foi possível cadastrar a refeição.");
        console.log(error);
      }
    }
  }

  async function fetchMealByIdAndDate(id: string, date: string) {
    try {
      const meal = await mealGetByIdAndDate(id, date);
      if (meal) {
        setMealData(meal);
      }
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Recuperar Refeição",
        "Não foi possível recuperar esta refeição!"
      );
    }
  }

  useEffect(() => {
    if (meal.id !== undefined) {
      fetchMealByIdAndDate(meal.id, meal.date);
    }
  }, []);

  return (
    <>
      <HeaderBasic
        color={theme.COLORS.GRAY_5}
        label="Nova Refeição"
      ></HeaderBasic>
      <S.Container>
        <S.Form>
          <S.InputLabel>Name</S.InputLabel>
          <S.NameInput
            value={mealData.name}
            onChangeText={(text) => updateMealField("name", text)}
          />
          <S.InputLabel>Descrição</S.InputLabel>
          <S.DescriptionInput
            value={mealData.description}
            onChangeText={(text) => updateMealField("description", text)}
          />
          <S.ContainerRow>
            <View style={{ width: "50%" }}>
              <S.InputLabel>Data</S.InputLabel>
              <S.DateTimeInput
                type="datetime"
                value={mealData.date}
                onChangeText={(text) => updateMealField("date", text)}
                options={{ format: "DD/MM/YYYY" }}
              />
            </View>

            <View style={{ width: "50%" }}>
              <S.InputLabel>Time</S.InputLabel>
              <S.DateTimeInput
                type="datetime"
                value={mealData.time}
                onChangeText={(text) => updateMealField("time", text)}
                options={{ format: "MM:HH" }}
              />
            </View>
          </S.ContainerRow>
          <S.InputLabel>Está dentro da dieta?</S.InputLabel>
          <S.ContainerRow>
            <OnOffDietButton
              dietType={mealData.type}
              label="Sim"
              onPress={() => updateMealField("type", "ONDIET")}
            />
            <OnOffDietButton
              dietType={mealData.type}
              label="Não"
              onPress={() => updateMealField("type", "OFFDIET")}
            />
          </S.ContainerRow>
        </S.Form>
        <ActionButton title="Salvar Refeição" onPress={handleNewMeal} />
      </S.Container>
    </>
  );
}
