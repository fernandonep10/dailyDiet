import "styled-components";
import theme from "../theme";

declare module "styled-components/native" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}

export type onOffDietStylePropsOptions = "ONDIET" | "OFFDIET" | undefined;

export type feedbackStyleProps = {
  type: onOffDietStylePropsOptions;
};
