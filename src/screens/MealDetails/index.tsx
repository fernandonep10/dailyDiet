import HeaderBasic from "@components/HeaderBasic";
import theme from "@theme/index";

export default function MealDetails() {
  return (
    <HeaderBasic
      color={theme.COLORS.GRAY_5}
      label="Nova Refeição"
    ></HeaderBasic>
  );
}
