import { onOffDietStylePropsOptions } from "@type/style";

export type mealProps = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  type: onOffDietStylePropsOptions;
};

export type ScoreBoardStats = {
  percentage: string;
  total: number;
  onDiet: number;
  offDiet: number;
  situation: onOffDietStylePropsOptions;
  maxSequence: number;
};
