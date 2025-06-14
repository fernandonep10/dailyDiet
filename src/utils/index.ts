import theme from "@theme/index";
import { mealProps } from "@type/data";
import { onOffDietStylePropsOptions } from "@type/style";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

export function getDietColors(dietType?: string, label?: string) {
  if (dietType === undefined) {
    return {
      backgroundColor: theme.COLORS.GRAY_6,
      borderColor: theme.COLORS.GRAY_6,
    };
  }

  if (dietType === "ONDIET") {
    if (label === "Sim") {
      return {
        backgroundColor: theme.COLORS.GREEN_LIGHT,
        borderColor: theme.COLORS.GREEN_DARK,
      };
    }
  } else {
    if (label === "Não") {
      return {
        backgroundColor: theme.COLORS.RED_LIGHT,
        borderColor: theme.COLORS.RED_DARK,
      };
    }
  }

  return {
    backgroundColor: theme.COLORS.GRAY_6,
    borderColor: theme.COLORS.GRAY_6,
  };
}

export function transformMealsToSectionList(allMeals: any[]) {
  // 1. Filter meals with a valid date
  const validMeals = allMeals.filter((meal) => meal.date);

  // 2. Group meals by date
  const groupedByDate = validMeals.reduce(
    (acc: Record<string, any[]>, meal) => {
      if (!acc[meal.date]) {
        acc[meal.date] = [];
      }

      acc[meal.date].push({
        time: meal.time,
        title: meal.name,
        type: meal.type || "UNKNOWN",
        id: meal.id,
        date: meal.date,
      });

      return acc;
    },
    {}
  );

  // 3. Convert the grouped object into an array and sort it
  const result = Object.entries(groupedByDate)
    .map(([date, data]) => ({
      title: date,
      data: data.sort((a, b) => a.time.localeCompare(b.time)), // order by time inside each group
    }))
    .sort((a, b) => {
      const [dayA, monthA, yearA] = a.title.split("/");
      const [dayB, monthB, yearB] = b.title.split("/");
      const dateA = new Date(+yearA, +monthA - 1, +dayA);
      const dateB = new Date(+yearB, +monthB - 1, +dayB);
      return dateB.getTime() - dateA.getTime(); // descending order
    });

  return result;
}

export function scoreBoardStats(meals: mealProps[]) {
  const total = meals.length;
  const onDiet = meals.filter((meal) => meal.type === "ONDIET").length;
  const offDiet = meals.filter((meal) => meal.type === "OFFDIET").length;
  const percentage =
    total === 0
      ? "0,00"
      : ((onDiet / total) * 100).toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });

  const situation: onOffDietStylePropsOptions =
    (onDiet / total) * 100 >= 80 ? "ONDIET" : "OFFDIET";

  // Ordena as refeições por data e hora para garantir sequência correta
  const sortedMeals = [...meals].sort((a, b) => {
    const dateA = `${a.date} ${a.time}`;
    const dateB = `${b.date} ${b.time}`;
    return dateA.localeCompare(dateB, "pt-BR");
  });

  let maxSequence = 0;
  let currentSequence = 0;

  for (const meal of sortedMeals) {
    if (meal.type === "ONDIET") {
      currentSequence++;
      if (currentSequence > maxSequence) {
        maxSequence = currentSequence;
      }
    } else {
      currentSequence = 0;
    }
  }

  return {
    percentage,
    total,
    onDiet,
    offDiet,
    situation,
    maxSequence,
  };
}

export function isValidDateTime(date: string, time: string): boolean {
  return dayjs(`${date} ${time}`, "DD/MM/YYYY HH:mm", true).isValid();
}
