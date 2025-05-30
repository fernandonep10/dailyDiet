import { TouchableOpacityProps } from "react-native";

export type MealCardStyleProps = "RED" | "GREEN";

export type MealCardStyleitemProps = {
  type: MealCardStyleProps;
};

export type MealCardPropsData = {
  time: string;
  title: string;
  type: MealCardStyleProps;
};

export type MealCardProps = MealCardPropsData & TouchableOpacityProps;
