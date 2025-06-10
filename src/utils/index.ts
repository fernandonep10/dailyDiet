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
