import { TouchableOpacityProps } from "react-native";

export type MealCardStyleProps = "ONDIET" | "OFFDIET";

export type MealCardStyleitemProps = {
  type: MealCardStyleProps;
};

export type MealCardPropsData = {
  time: string;
  title: string;
  type: MealCardStyleProps;
  id: string;
  date: string;
};

export type MealCardProps = MealCardPropsData & TouchableOpacityProps;
