import HeaderBasic from "@components/HeaderBasic";
import theme from "@theme/index";
import * as S from "./styles";
import { Alert, StatusBar, View } from "react-native";
import { useEffect, useState } from "react";

import ActionButton from "@components/ActionButton";
import ModalDelete from "@components/ModalDelete";

import { mealProps } from "@type/data";
import { useNavigation, useRoute } from "@react-navigation/native";
import { mealGetByIdAndDate } from "@storage/meal/mealGetByIdAndDate";
import { mealDeleteByIdAndDate } from "@storage/meal/mealDeleteByIdAndDate";

type RouteParams = {
  id: string;
  date: string;
};

export default function MealInfo() {
  const route = useRoute();
  const navigation = useNavigation();
  const meal = route.params as RouteParams;

  const [mealData, setMealData] = useState<mealProps>({
    id: "",
    name: "",
    description: "",
    date: "",
    time: "",
    type: undefined,
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  function handleEditMeal() {
    navigation.navigate("mealDetails", mealData);
  }

  function handleDeleteMeal() {
    setShowDeleteModal(true);
  }

  async function confirmDeleteMeal() {
    try {
      await mealDeleteByIdAndDate(mealData.id, mealData.date);
      navigation.navigate("home");
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Excluir refeição",
        "Não foi possível excluir esta refeição!"
      );
    } finally {
      setShowDeleteModal(false);
    }
  }

  useEffect(() => {
    if (meal.id !== undefined) {
      fetchMealByIdAndDate(meal.id, meal.date);
    }
  }, []);

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar
        backgroundColor={
          mealData.type === "ONDIET"
            ? theme.COLORS.GREEN_LIGHT
            : theme.COLORS.RED_LIGHT
        }
        barStyle="light-content"
      />

      <HeaderBasic
        color={
          mealData.type === "ONDIET"
            ? theme.COLORS.GREEN_LIGHT
            : theme.COLORS.RED_LIGHT
        }
        label="Refeição"
      />

      <S.Container>
        <S.Form>
          <S.MealLabel>{mealData.name}</S.MealLabel>
          <S.MealInfo>{mealData.description}</S.MealInfo>

          <S.DateAndTimeLabel>Data e hora</S.DateAndTimeLabel>
          <S.MealInfo>
            {mealData.date} às {mealData.time}
          </S.MealInfo>

          <S.MealClassContainer>
            <S.Class type={mealData.type} />
            <S.MealClassInfo>
              {mealData.type === "ONDIET" ? "dentro da dieta" : "fora da dieta"}
            </S.MealClassInfo>
          </S.MealClassContainer>
        </S.Form>

        <ActionButton
          title="Editar refeição"
          icon="edit"
          color="PRIMARY"
          onPress={handleEditMeal}
        />

        <ActionButton
          title="Excluir refeição"
          icon="delete"
          color="SECONDARY"
          style={{ marginTop: 9 }}
          onPress={handleDeleteMeal}
        />
      </S.Container>

      <ModalDelete
        visible={showDeleteModal}
        onCancel={() => setShowDeleteModal(false)}
        onConfirm={confirmDeleteMeal}
      />
    </View>
  );
}
