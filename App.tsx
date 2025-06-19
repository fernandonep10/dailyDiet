import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";

// import Home from "@screens/Home";
// import Stats from "@screens/Stats";
// import MealDetails from "@screens/MealDetails";
// import MealFeedback from "@screens/MealFeedback";

import { Routes } from "@routes/index";

import theme from "@theme/index";
import { useEffect } from "react";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        {fontsLoaded ? <Routes /> : <ActivityIndicator />}
      </SafeAreaView>
    </ThemeProvider>
  );
}
