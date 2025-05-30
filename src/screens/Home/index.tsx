import * as S from "./styles";
import Header from "@components/Header";
import ActionButton from "@components/ActionButton";
import { useState, useEffect } from "react";
import MealList, { MealListSectionsPropsData } from "@components/MealsList";

export default function Home() {
  const [meals, setMeals] = useState<MealListSectionsPropsData[]>([
    {
      title: "12.08.30",
      data: [
        { time: "20:00", title: "X-tudo", type: "RED" },
        { time: "20:01", title: "X-tudo", type: "RED" },
        { time: "20:02", title: "X-tudo", type: "RED" },
      ],
    },
    {
      title: "11.08.22",
      data: [
        { time: "20:03", title: "X-tudo", type: "RED" },
        { time: "20:04", title: "X-tudo", type: "RED" },
        { time: "20:05", title: "X-tudo", type: "RED" },
      ],
    },
  ]);

  return (
    <S.ContainerHeader>
      <Header type="statsIsOff" />
      <S.CotainerBody>
        <S.mealsLabel>Refeições</S.mealsLabel>
        <ActionButton title="Nova Refeição" icon="add" />
        <MealList sections={meals} />
      </S.CotainerBody>
    </S.ContainerHeader>
  );
}
