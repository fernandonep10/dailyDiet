import HeaderBasic from "@components/HeaderBasic";
import theme from "@theme/index";
import * as S from "./styles";
import { View } from "react-native";
import { useEffect, useState } from "react";
import ActionButton from "@components/ActionButton";
import OnOffDietButton from "@components/onOffDietButton";
import { ActionButtonIcon } from "@components/ActionButtonIcon";
import { onOffDietStylePropsOptions } from "@type/style";
import { mealCreate } from "@storage/meal/mealCreate";
import { mealProps } from "@type/data";
import { useNavigation } from "@react-navigation/native";

export default function MealDetails() {
  const [mealData, setMealData] = useState<mealProps>({
    name: "",
    description: "",
    date: "",
    time: "",
    type: undefined, // ou 'ON_DIET' como default
  });

  const navigation = useNavigation();

  function updateMealField<K extends keyof mealProps>(
    field: K,
    value: mealProps[K]
  ) {
    setMealData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleNewMeal() {
    await mealCreate(mealData);
    console.log("Refeição cadastradas com sucesso");

    navigation.navigate("mealFeedback", { type: mealData.type });
  }

  useEffect(() => {
    // setMealStatus("OFFDIET");
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
