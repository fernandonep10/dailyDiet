import { ViewProps } from "react-native";
export type StatsCardPropsStyle = {
  color?: string;
  height?: number | string;
  width?: number | string;
  title?: string;
  subtitle?: string;
};

export type StatsCardProps = ViewProps & StatsCardPropsStyle;
