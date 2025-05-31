import { StatusBar } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from "@expo-google-fonts/nunito-sans";
import Home from "@screens/Home";
import Stats from "@screens/Stats";
import theme from "@theme/index";

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      {/* <StatusBar
          barStyle={"light-content"}
          backgroundColor={theme.COLORS.WHITE}
        /> */}
      {fontsLoaded ? <Stats /> : <ActivityIndicator />}
      {/* </SafeAreaView> */}
    </ThemeProvider>
  );
}
