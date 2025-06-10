import { onOffDietStylePropsOptions } from "@type/style";
import { TouchableOpacityProps } from "react-native";

export type onOffDietPropsOptions = TouchableOpacityProps & {
  dietType: onOffDietStylePropsOptions;
  label?: "Sim" | "Não";
};
