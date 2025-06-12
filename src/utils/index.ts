import theme from "@theme/index";

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
