import { onOffDietStylePropsOptions } from "@type/style";

export type mealProps = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  type: onOffDietStylePropsOptions;
};
