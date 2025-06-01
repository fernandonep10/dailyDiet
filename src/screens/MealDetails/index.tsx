import HeaderBasic from "@components/HeaderBasic";
import theme from "@theme/index";
import * as S from "./styles";
import { View } from "react-native";
import { useState } from "react";
import ActionButton from "@components/ActionButton";
import { ActionButtonIcon } from "@components/ActionButtonIcon";

export default function MealDetails() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <>
      <HeaderBasic
        color={theme.COLORS.GRAY_5}
        label="Nova Refeição"
      ></HeaderBasic>
      <S.Container>
        <S.Form>
          <S.InputLabel>Name</S.InputLabel>
          <S.NameInput />
          <S.InputLabel>Descrição</S.InputLabel>
          <S.DescriptionInput />
          <S.ContainerRow>
            <View style={{ width: "50%" }}>
              <S.InputLabel>Data</S.InputLabel>
              <S.DateTimeInput
                type="datetime"
                value={date}
                onChangeText={setDate}
                options={{ format: "DD/MM/YYYY" }}
              />
            </View>

            <View style={{ width: "50%" }}>
              <S.InputLabel>Time</S.InputLabel>
              <S.DateTimeInput
                type="datetime"
                value={time}
                onChangeText={setTime}
                options={{ format: "MM:HH" }}
              />
            </View>
          </S.ContainerRow>
          <S.InputLabel>Está dentro da dieta?</S.InputLabel>
          <S.ContainerRow>
            <S.OnDietContainer type="SECONDARY">
              <S.OnOffDietLabel>Sim</S.OnOffDietLabel>
            </S.OnDietContainer>
            <S.OffDietContainer type="SECONDARY">
              <S.OnOffDietLabel>Não</S.OnOffDietLabel>
            </S.OffDietContainer>
          </S.ContainerRow>
        </S.Form>
        <ActionButton title="Cadastrar Refeição" />
      </S.Container>
    </>
  );
}
