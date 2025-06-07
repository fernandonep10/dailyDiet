import { ActivityIndicator } from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import Home from "@screens/Home";
import Stats from "@screens/Stats";
import MealDetails from "@screens/MealDetails";
import MealFeedback from "@screens/MealFeedback";
import theme from "@theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <MealFeedback type="SECONDARY" /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}
